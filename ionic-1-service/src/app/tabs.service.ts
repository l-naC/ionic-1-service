import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

	constructor(private tabName: TabsService) { }

	public tab1 = "Première tab";
  	public tab2 = "Deuxième tab";
  	public tab3 = "Troisième tab";
}
