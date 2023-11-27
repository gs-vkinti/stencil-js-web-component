import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'card-component',
  styleUrl: 'card-component.css',
  shadow: true,
})
export class CardComponent {
  /**
   * The first name
   */
  @Prop() time: string;
  @Prop() onClick: () => void;

  render() {
    return (
      <div class="card" onClick={this.onClick}>
        <div class="container">
          <h4>
            <b>Time:</b>
          </h4>
          <p>{this.time}</p>
        </div>
      </div>
    );
  }
}
