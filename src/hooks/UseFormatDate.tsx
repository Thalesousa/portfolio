import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function UseFormatDate(createdAt : string) {
  return format(parseISO(createdAt), 'dd/MM/yyyy', { locale: ptBR })
}