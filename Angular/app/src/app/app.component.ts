import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component } from "@angular/core";

@Component({
  selector: "my-component, MyComponent",
  template: `
    <div class="div">
      <div class="div-2">
        <div class="column">
          <img
            loading="lazy"
            srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/b28cdc6d-8015-4dc6-b1f7-c8e0ca4ce945?apiKey=b9c186c2081340d48e62936e47c051f7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28cdc6d-8015-4dc6-b1f7-c8e0ca4ce945?apiKey=b9c186c2081340d48e62936e47c051f7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28cdc6d-8015-4dc6-b1f7-c8e0ca4ce945?apiKey=b9c186c2081340d48e62936e47c051f7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28cdc6d-8015-4dc6-b1f7-c8e0ca4ce945?apiKey=b9c186c2081340d48e62936e47c051f7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28cdc6d-8015-4dc6-b1f7-c8e0ca4ce945?apiKey=b9c186c2081340d48e62936e47c051f7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28cdc6d-8015-4dc6-b1f7-c8e0ca4ce945?apiKey=b9c186c2081340d48e62936e47c051f7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28cdc6d-8015-4dc6-b1f7-c8e0ca4ce945?apiKey=b9c186c2081340d48e62936e47c051f7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28cdc6d-8015-4dc6-b1f7-c8e0ca4ce945?apiKey=b9c186c2081340d48e62936e47c051f7&"
            class="img"
          />
        </div>
        <div class="column-2">
          <div class="div-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/51cb82a8-b2ee-439b-b62a-050f8adc62fd?apiKey=b9c186c2081340d48e62936e47c051f7&"
              class="img-2"
            />
            <div class="div-4">Sign In</div>
            <div class="div-5">Email id</div>
            <div class="div-6">Password</div>
            <div class="div-7">Submit</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .div {
        padding-right: 80px;
        background-color: #fff;
      }
      @media (max-width: 991px) {
        .div {
          padding-right: 20px;
        }
      }
      .div-2 {
        gap: 20px;
        display: flex;
      }
      @media (max-width: 991px) {
        .div-2 {
          flex-direction: column;
          align-items: stretch;
          gap: 0px;
        }
      }
      .column {
        display: flex;
        flex-direction: column;
        line-height: normal;
        width: 56%;
        margin-left: 0px;
      }
      @media (max-width: 991px) {
        .column {
          width: 100%;
        }
      }
      .img {
        aspect-ratio: 0.83;
        object-fit: contain;
        object-position: center;
        width: 100%;
        overflow: hidden;
        flex-grow: 1;
      }
      @media (max-width: 991px) {
        .img {
          max-width: 100%;
          margin-top: 40px;
        }
      }
      .column-2 {
        display: flex;
        flex-direction: column;
        line-height: normal;
        width: 44%;
        margin-left: 20px;
      }
      @media (max-width: 991px) {
        .column-2 {
          width: 100%;
        }
      }
      .div-3 {
        justify-content: center;
        align-items: flex-start;
        border-radius: 6px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: auto;
        padding: 32px 34px 42px;
      }
      @media (max-width: 991px) {
        .div-3 {
          max-width: 100%;
          margin-top: 40px;
          padding: 0 20px;
        }
      }
      .img-2 {
        aspect-ratio: 3.4;
        object-fit: contain;
        object-position: center;
        width: 187px;
        overflow: hidden;
        align-self: center;
        max-width: 100%;
      }
      .div-4 {
        color: var(--konfluence-black-900, #1a1a1a);
        align-self: stretch;
        margin-top: 50px;
        font: 600 28px/20px Poppins, -apple-system, Roboto, Helvetica,
          sans-serif;
      }
      @media (max-width: 991px) {
        .div-4 {
          margin-top: 40px;
        }
      }
      .div-5 {
        color: var(--light-text-secondary-text, #64748b);
        align-self: stretch;
        border-radius: 4px;
        border: 1px solid var(--light-forms-border, #cbd5e1);
        background-color: var(--light-forms-background, #fff);
        margin-top: 30px;
        padding: 12px;
        font: 400 16px/24px Inter, sans-serif;
      }
      .div-6 {
        color: var(--light-text-secondary-text, #64748b);
        align-self: stretch;
        border-radius: 4px;
        border: 1px solid var(--light-forms-border, #cbd5e1);
        background-color: var(--light-forms-background, #fff);
        margin-top: 16px;
        padding: 12px;
        font: 400 16px/24px Inter, sans-serif;
      }
      .div-7 {
        color: var(--light-text-inverse-text, #fff);
        white-space: nowrap;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        background-color: #32043c;
        align-self: stretch;
        margin-top: 36px;
        padding: 12px 20px;
        font: 400 20px/28px Inter, sans-serif;
      }
      @media (max-width: 991px) {
        .div-7 {
          white-space: initial;
        }
      }
    `,
  ],
})
export class MyComponent {}

@NgModule({
  declarations: [MyComponent],
  imports: [CommonModule],
  exports: [MyComponent],
})
export class MyComponentModule {}
