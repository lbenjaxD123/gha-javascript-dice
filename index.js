const core = require('@actions/core');
const github = require('@actions/github');

const tiradaDado = () => {

    return Math.floor((Math.random() * 6) + 1)

}

try {
    const payloadEvent = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`Payload event: ${payloadEvent}`);

    const numeroDados = core.getInput('numero-dados');
    core.notice(`Numero de dados: ${numeroDados}`);
    core.notice("Prueba2...");
    core.setOutput('dado1', tiradaDado());
    if (numeroDados == 2) {
        core.setOutput('dado2', tiradaDado());
    }

} catch (error) {
    core.setFailed(error.message)
}