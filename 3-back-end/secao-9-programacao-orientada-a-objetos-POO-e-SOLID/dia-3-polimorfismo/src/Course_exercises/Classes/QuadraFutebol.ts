import { IAgenda } from "../../interfaces/IAgenda";
import { IFutebol } from "../../interfaces/IFutebol";
import Quadra from "../Classes_Abstratas/Quadra";
import normas from "../normas/normasDeUso";

export default class QuadraFutebol extends Quadra {
  futebolData: IFutebol = normas.futebol

  reservar<IFutebol>(horaReserva: Date): IAgenda<IFutebol> {

    return {
      data: horaReserva,
      protocolo: Math.random().toString(36).slice(2, 20),
      regras: this.futebolData as unknown as IFutebol
    }
  }
}