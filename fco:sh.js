/**
 * Helper for the ACC execCommand() function
 * @author Florian Courgey
 * Documentation {@link https://github.com/floriancourgey/adobe-campaign-shell}
 * @version 1.0.0 
 * @param {string} command the linux command to execute
 * @param {object} params
 * @param {bool} params.logTheCall if true, calls logInfo(command) (default to true)
 * @param {bool} params.logTheOutput if true, send the output to logInfo (default to true)
 * @param {bool} params.throwOnError if true, throws an exception if linuxResultCode is != 0 (default to false)
 *
 * @example
 * sh.exec('pwd'); // print working directory
 * sh.exec('mkdir -p a/b/c', {logTheCall:false}); // create folder (with parents if needed)
 * sh.exec('mktemp -d', {logTheOutput:false, throwOnError: true}); // createa a temp folder
 */
var sh = {
  // vars for defaults & instance usage
  logTheCall: true,
  logTheOutput: true,
  throwOnError: false,
  // exec()
  exec: function(command, params){
    var _this = this; // cache this
    if(undefined == params){
      params = {};
    }
    var logTheCall = undefined != params.logTheCall ? params.logTheCall : _this.logTheCall;
    var logTheOutput = undefined != params.logTheOutput ? params.logTheOutput : _this.logTheOutput;
    var throwOnError = undefined != params.throwOnError ? params.logTheOutput : _this.throwOnError;
    if(logTheCall){
      logInfo('sh.exec: '+command);
    }
    var result = execCommand(command, !throwOnError); // @return [linux result code, output]
    var lines = result[1].split("\n");
    if(logTheOutput){
      for each (var line in lines){ 
        logInfo("" + line);
      }
    }
    return {linuxResultCode: result[0], rawOutput: result[1], lines: lines};
  }
};
