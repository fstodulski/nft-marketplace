import VanillaTilt from 'vanilla-tilt';
import type { TiltOptions } from 'vanilla-tilt';
import type { Action, ActionReturn } from 'svelte/action';

export const tilt: Action<HTMLElement, TiltOptions> = (
  node: HTMLElement,
  options: TiltOptions
): ActionReturn => {
  VanillaTilt.init(node, options);

  return {
    destroy() {
      (node as any).vanillaTilt.destroy();
    }
  };
};
