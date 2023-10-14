import Clube from "./Classes/Clube";
import QuadraFutebol from "./Classes/QuadraFutebol";
import QuadraTenis from "./Classes/QuadraTenis";

const clubeSBC = new Clube()
const quadraFutebol = new QuadraFutebol()
const quadraTenis = new QuadraTenis()

clubeSBC.adicionarQuadra(quadraFutebol)
clubeSBC.adicionarQuadra(quadraTenis)

const reservaFutebol = new Date(2023, 10, 15)
const reservaTenis = new Date(2023, 10, 20)

const reservaQuadraFutebol = clubeSBC.buscarQuadra<QuadraFutebol>(0).reservar(reservaFutebol)
const reservaQuadraTenis = clubeSBC.buscarQuadra<QuadraTenis>(1).reservar(reservaTenis)

console.log(reservaQuadraFutebol);
console.log(reservaQuadraTenis);


