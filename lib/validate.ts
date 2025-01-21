

const validate = {
    firstName(value: string) {
        let pattern = new RegExp(/^[a-zA-Z\-]+$/);
        return pattern.test(value.trim());
    },
    lastName(value: string) {
        let pattern = new RegExp(/^[a-zA-Z\-]+$/);
        return pattern.test(value.trim());
    },
    fullName(name: string) {
        const fullNameRegex = /^[A-Za-z]+[-\s][A-Za-z]+(?:[-\s][A-Za-z]+)*$/;
        return fullNameRegex.test(name);
    },
    email(email: string) {
        let pattern = new RegExp(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        return pattern.test(email.trim());
    },
    phoneNumber(phone: string) {
        let pattern = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g);
        var digits = phone.replace(/\D/g, "");
        return pattern.test(digits);
    },
    password(password: string) {
        return password.length > 3
    },
    signupForm(payload: any) {
        var valid = false
        if (payload == null) valid = true;
        const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'password'];
        const missingFields = requiredFields.filter(field => payload != undefined && payload[field]);
        if (missingFields.length > 0) {
            valid = false;
        }
        else { valid = true }
        return valid;
    },
    updateProfileForm(payload: any) {
        var valid = false
        if (payload == null) valid = true;
        const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
        const missingFields = requiredFields.filter(field => payload != undefined && payload[field]);
        if (missingFields.length > 0) {
            valid = false;
        }
        else { valid = true }
        return valid;
    },
    signinForm(payload: any) {
        var valid = false
        if (payload == null) valid = true;
        const requiredFields = ['email',  'password'];
        const missingFields = requiredFields.filter(field => payload != undefined && payload[field]);
        if (missingFields.length > 0) {
            valid = false;
        }
        else { valid = true }
        return valid;
    },
    supportForm(payload: any) {
        var valid = false
        if (payload == null) valid = true;
        const requiredFields = ['fullName',  'email', 'phone','message'];
        const missingFields = requiredFields.filter(field => payload != undefined && payload[field]);
        if (missingFields.length > 0) {
            valid = false;
        }
        else { valid = true }
        return valid;
    },
    domainName(value: string) {
        let pattern = new RegExp(/^(?!-)[a-z0-9-]{1,63}(?<!-)$/);
        return pattern.test(value.trim());
    },
}

export default validate