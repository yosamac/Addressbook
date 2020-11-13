export class Contact {

    constructor(
        public id: number,
        public fullName: string,
        public surname: string,
        public mobile?: string,
        public email?: string,
        public facebook?: string,
        public twitter?: string
    ) {}
}
