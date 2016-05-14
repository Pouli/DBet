export const displayNameFilter = () => {
    return (user) => {
        if (!user) return '';
        if (user.profile && user.profile.name) return user.profile.name;
        if (user.emails) {
            const email = user.emails[0].address;
            return email.substring(0, email.lastIndexOf('@'));
        }
        return user;
    }
};
