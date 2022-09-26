import { SearchSuggestion } from './SearchSuggestion.ts';

export class HistorySuggestion extends SearchSuggestion {
  static type = 'HistorySuggestion';

  constructor(data: any) {
    super(data);
  }
}
