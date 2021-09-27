import { format, parseISO } from 'date-fns';
import  ptBR  from 'date-fns/locale/pt-BR';

export function useFormatDate(createdAt : string) {
  return format(parseISO(createdAt), 'dd/MM/yyyy', { locale: ptBR })
}