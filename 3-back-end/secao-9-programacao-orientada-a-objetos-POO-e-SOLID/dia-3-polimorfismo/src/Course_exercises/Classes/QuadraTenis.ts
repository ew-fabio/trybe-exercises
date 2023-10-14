import { IAgenda } from "../../interfaces/IAgenda";
import { ITenis } from "../../interfaces/ITenis";
import Quadra from "../Classes_Abstratas/Quadra";
import normas from "../normas/normasDeUso";

export default class QuadraTenis extends Quadra {
  tenisData: ITenis = normas.tenis

  reservar<ITenis>(horaReserva: Date): IAgenda<ITenis> {
    return {
      data: horaReserva,
      protocolo: Math.random().toString(36).slice(2, 20),
      regras: this.tenisData as unknown as ITenis
    }

  }
}