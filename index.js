const PrimoPacco = require("primo-pacco");
const msg = "se mia nonna avesse avuto le ruote sarebbe stata una biciclettae";
const primo = new PrimoPacco(msg);

const repeat = () => {
    primo.dire();
};

setInterval(repeat, 1000);
