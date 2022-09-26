import { NavigationEndpoint } from '../NavigationEndpoint.ts';

export class TextRun {
  text: string;
  endpoint: NavigationEndpoint | undefined;

  constructor(data: any) {
    this.text = data.text;
    this.endpoint = data.navigationEndpoint
      ? new NavigationEndpoint(data.navigationEndpoint)
      : undefined;
  }
}
