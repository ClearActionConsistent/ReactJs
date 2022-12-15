export const defaultMember = {
    fullname: '',
    username: '',
    role: '',
    groupName: '',
    email: '',
    phoneNumber: '',
    DOB: '',
    weight: '',
    gender: '',
};

const createRoleData = (role) => {
    return { role };
};

export const roleDatas = [
    createRoleData('Super Admin'),
    createRoleData('Admin'),
    createRoleData('Coach'),
    createRoleData('Member'),
    createRoleData('Customer Service'),
];

const createData = (fullname, username, role, groupName, email, phoneNumber, DOB, weight, gender) => {
    return { fullname, username, role, groupName, email, phoneNumber, DOB, weight, gender };
};

export const memberdatas = [
    createData('Tino Phan', 'tinophan247', 'Super Admin', 'TMA Group', 'tinophan@gmail.com', '0999888777', '1/1/2000', '75kg', 'Male'),
    createData('Han Trinh', 'peDau', 'Admin', 'OTF Group', 'hanytrinh@gmail.com', '0987654321', '2/2/1995', '45kg', 'Female'),
    createData('Anh Phan', 'anhphan123', 'Coach', 'TMA Group', 'anhphan@gmail.com', '0999777666', '3/3/2000', '80kg', 'Male'),
    createData('Duc Vo', 'ducvo789', 'Member', 'CT4 Group', 'ducvo@gmail.com', '0999555444', '4/4/2000', '65kg', 'Male'),
    createData('Huy Nguyen', 'anhHatDe', 'Member', 'PDA Group', 'huynguyen@gmail.com', '0999444333', '5/5/2000', '75kg', 'Male'),
    createData('Tony Tong', 'tonytong567', 'Customer Service', 'TMA Group', 'tonytong@gmail.com', '0999111222', '6/5/1987', '70kg', 'Male'),
];