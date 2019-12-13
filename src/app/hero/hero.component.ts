import { Component, OnInit } from "@angular/core";
import { APIService } from "../API.service";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"]
})
export class HeroComponent implements OnInit {
  private heros: any;
  constructor(private api: APIService) {}

  async ngOnInit() {
    try {
      const result = await this.api.ListHeros();
      this.heros = result.items;
    } catch (error) {
      alert("Something went wrong");
    }
  }

  createHero = async () => {
    const newHero = {
      name: "Hulk",
      power: "Smash",
      status: true
    };
    try {
      const result = await this.api.CreateHero(newHero);
      this.heros.push({ ...newHero, id: result.id });
    } catch (error) {
      alert("Something went wrong");
    }
  };

  deleteHero = async ({ id }) => {
    try {
      await this.api.DeleteHero({ id });
      this.heros = this.heros.filter(hero => hero.id !== id);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  getHeros = async () => {
    try {
      const result = await this.api.ListHeros();
      this.heros = result.items;
    } catch (error) {
      alert("Something went wrong");
    }
  };
}
