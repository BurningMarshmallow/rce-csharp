using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Scripting;

namespace RCEWeb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CalculatorController : ControllerBase
    {
        [HttpPost]
        public Task<object> Evaluate([FromBody] ExpressionModel expressionModel)
        {
            return CSharpScript.EvaluateAsync(expressionModel.Expression);
        }
    }
}
