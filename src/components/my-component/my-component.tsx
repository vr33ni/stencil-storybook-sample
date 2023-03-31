import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
 
 @Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  @Prop() label: string;
  @Prop() color: string;
  @Prop() size: string;

  render() {
     return (
      <Host>
        <button class={this.getClassNames()} type="button">
          <slot></slot>
        </button>
      </Host>
    );
  }

  getSizeClass() {
    return `${this.size}` === 's' ? 's' : '';
  }

  getClassNames() {
    return classNames('component', this.size && `component-${this.getSizeClass()}`, `component-${this.color}`);
  }
}
