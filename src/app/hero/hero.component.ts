import { Component, OnInit, TemplateRef } from "@angular/core";
import { APIService } from "../API.service";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"]
})
export class HeroComponent implements OnInit {
  private heros: any;
  private filterKey: string;
  modalRef: BsModalRef;
  name: string;
  power: string;
  constructor(private api: APIService, private modalService: BsModalService) {}

  async ngOnInit() {
    try {
      const result = await this.api.ListHeros();
      this.heros = result.items;
    } catch (error) {
      alert("Something went wrong");
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.name = "";
    this.power = "";
    this.modalRef.hide();
  }

  createHero = async () => {
    try {
      const newHero = {
        name: this.name,
        power: this.power,
        status: true
      };
      console.log(newHero);
      const result = await this.api.CreateHero(newHero);
      this.heros.push({ ...newHero, id: result.id });
      this.closeModal();
    } catch (error) {
      alert("Something went wrong");
    }
  };

  updateHero = () => {
    console.log('name', this.name);
    console.log('power', this.power);
    this.closeModal();
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
