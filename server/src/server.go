package main

import "fmt"
import "log"
import "net/http"
import "net/url"
import "encoding/json"
import "strings"
import "os"
// Is this really the best way to do this?
import "github.com/gorilla/mux"

type ExecuteCodeRequest struct {
  CodeToExecute string `json:"codeToExecute"`
  Language string `json:"language"`
}

type CodeExecutionResult struct {
  RunStatus struct {
    MemoryUsed string `json:"memory_used"`
    TimeLimit int `json:"time_limit"`
    OutputHTML string `json:"output_html"`
    MemoryLimit int `json:"memory_limit"`
    TimeUsed string `json:"time_used"`
    Signal string `json:"signal"`
    StatusDetail string `json:"status_detail"`
    Status string `json:"status"`
    StdErr string `json:"stderr"`
    Output string `json:"output"`
    Async int `json:"async"`
    RequestNotOkReason string `json:"request_NOT_OK_reason"`
    RequestOk string `json:"request_OK"`
  } `json:"run_status"`
  CompileStatus string `json:"compile_status"`
  WebLink string `json:"web_link"`
  CodeId string `json:"code_id"`
}

type Configuration struct {
  HackerEarthClientSecret string `json:"HACKER_EARTH_CLIENT_SECRET"`
}

func executeCode(codeToExecute string, language string, configuration *Configuration) (*CodeExecutionResult, error) {
  testData := url.Values{}
  // TODO: Hide this somewhere
  testData.Add("client_secret", configuration.HackerEarthClientSecret)
  testData.Add("async", "0")
  testData.Add("source", codeToExecute)
  testData.Add("lang", language)
  response, err := http.Post(
    "https://api.hackerearth.com/v3/code/run/",
    "application/x-www-form-urlencoded",
    strings.NewReader(testData.Encode()),
  )
  if err != nil {
    fmt.Printf("Error posting to hackerearth")
    return new(CodeExecutionResult), err
  }
  codeExecutionResult := new(CodeExecutionResult)
  json.NewDecoder(response.Body).Decode(codeExecutionResult)
  fmt.Printf("%q", codeExecutionResult.WebLink)
  return codeExecutionResult, nil
}

func loadConfig() *Configuration {
  file, err := os.Open("config.json")
  if err != nil {
    fmt.Printf("%q", err)
    panic("Couldn't load configuration file!")
  }
  configuration := new(Configuration)
  json.NewDecoder(file).Decode(configuration)
  return configuration
}

func main() {
    // TODO: Make this global or something
    configuration := loadConfig()
    router := mux.NewRouter()
    router.HandleFunc("/code/execute", func(w http.ResponseWriter, req *http.Request) {
        executeCodeRequest := new(ExecuteCodeRequest)
        json.NewDecoder(req.Body).Decode(executeCodeRequest)
        codeExecutionResult, err := executeCode(
          executeCodeRequest.CodeToExecute,
          executeCodeRequest.Language,
          configuration,
        )
        if err != nil {
          // TODO: Better errorhandling
          panic("Error encountered connecting to HackerEarth!")
        }
        fmt.Fprintf(w, "server response: %q", codeExecutionResult.RunStatus.Output)
    }).Methods("POST")
    http.Handle("/", router)
    log.Fatal(http.ListenAndServe(":8080", nil))
}
