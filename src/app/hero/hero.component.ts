import { Component, OnInit } from "@angular/core";
import { APIService } from "../API.service";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"]
})
export class HeroComponent implements OnInit {
  private heros: any;
  private filterKey: string;
  constructor(private api: APIService) {}

  onCreateHeroListener = () => {
    this.api.OnCreateHeroListener.subscribe(
      result => {
        alert("Someone created a hero");
      },
      error => {
        throw error;
      }
    );
  };

  onDeleteHeroListener = () => {
    this.api.OnDeleteHeroListener.subscribe(
      result => {
        alert("Someone deleted a hero");
      },
      error => {
        throw error;
      }
    );
  };

  onUpdateHeroListener = () => {
    this.api.OnUpdateHeroListener.subscribe(
      result => {
        alert("Someone updated a hero");
      },
      error => {
        throw error;
      }
    );
  };

  async ngOnInit() {
    try {
      const result = await this.api.ListHeros();
      this.onCreateHeroListener();
      this.onDeleteHeroListener();
      this.onUpdateHeroListener();
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

  updateHero = async hero => {
    try {
      await this.api.UpdateHero(hero);
      this.heros = this.heros.map(heroObj => {
        if (heroObj.id === hero.id) {
          return hero;
        }

        return heroObj;
      });
    } catch (error) {
      alert("Something went wrong");
    }
  };

  searchHero = async () => {
    try {
      const result = await this.api.SearchHeros({
        name: { match: this.filterKey }
      });
      this.heros = result.items;
    } catch (error) {
      alert("Something went wrong");
    }
  };
}
