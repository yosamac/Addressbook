export class Person {

    constructor(
        public id: number,
        public firstname: string,
        public lastname: string,
        public mobile?: string,
        public email?: string,
        public facebook?: string,
        public twitter?: string
    ) {}
}
