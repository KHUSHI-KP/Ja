const company = {
    name: "TechCorp",
    departments: {
        engineering: {
            manager: {
                name: "Rahul",
                contact: {
                    email: "rahul@example.com"
                }
            }
        }
    }
};
console.log(company.departments.engineering.manager.contact.email);