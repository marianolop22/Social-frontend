import { Role } from './role.model';
import { Group } from './group.model';

export class User {

    email: string;
    name: string;
    surname: string;
    fileNumber: string;
    password: string;
    creationDate: string;
    endDate: string;
    birthday: string;
    status: string;
    contactEmail: string;
    workPhone: string;
    personalPhone: string;
    address: string;
    locality: string;
    province: string;
    acceptTerm: string;
    avatarPath: string;
    roles: Array<Role>;
    groups: Array<Group>;

    constructor() {}

    get (): User {
        return this;
    }

    set ( user: User ) {

        this.email = user.email;
        this.name = user.name;
        this.surname = user.surname;
        this.fileNumber = user.fileNumber;
        this.password = null;
        this.creationDate = user.creationDate;
        this.endDate = user.endDate;
        this.birthday = user.birthday;
        this.status = user.status;
        this.contactEmail = user.contactEmail;
        this.workPhone = user.workPhone;
        this.personalPhone = user.personalPhone;
        this.address = user.address;
        this.locality = user.locality;
        this.province = user.province;
        this.acceptTerm = user.acceptTerm;
        this.avatarPath = user.avatarPath;
        this.roles = user.roles;
        this.groups = user.groups;
    }


}





