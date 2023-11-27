import { newSpecPage } from '@stencil/core/testing';
import { CardComponent } from './card-component';

describe('card-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CardComponent],
      html: '<card-component></card-component>',
    });
    expect(root).toEqualHtml(`
      <card-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </card-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [CardComponent],
      html: `<card-component first="Stencil" last="'Don't call me a framework' JS"></card-component>`,
    });
    expect(root).toEqualHtml(`
      <card-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </card-component>
    `);
  });
});
