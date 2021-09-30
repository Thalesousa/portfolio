import { format, parseISO } from 'date-fns';
import  ptBR  from 'date-fns/locale/pt-BR';

export function UseFormatDate(createdAt : string) {
  return format(parseISO(createdAt), 'dd/MM/yyyy', { locale: ptBR })
}