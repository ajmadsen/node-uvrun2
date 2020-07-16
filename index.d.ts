declare namespace uvrun2 {
  function runOnce(block: boolean): number;

  class waitFor<T> {
    constructor();
    provide(value?: T): void;
    accept(block?: boolean | number | string): T;
  }
}

export = uvrun2;
