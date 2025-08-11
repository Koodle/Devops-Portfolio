# This plan defines what needs to be tested

**Coverage**
I will focus on the core user requirements & write test cases for components rendering, lib functions, server actions.

## Use Case: "As a user, i need to be able to login"

### Steps:
- As user, log into application at "/login"
- Select HTML input with attribute "id=email"
- Type string: "user@nextmail.com"
- Select HTML input with attribute "id=password"
- Type string: "123456"
- Select Button with attribute "id=submit"
### Expected Result:
- Navigate to dashboard page with correct user data retrieved

## Use Case: "As a user, I need to **view** my Invoices"

### Steps:
- Start at "/dashboard"
- Select HTML Button with attribute href="/dashboard/invoices"
### Expected Result:
- Navigate to "dashboard/invoices".

## Use Case: "As a user, I need to **create** an Invoice"

### Steps:
- Start at "/dashboard/invoices/create"
- Select customer "Amy Burns"
- Enter ammount "8888.88"
- Select invoice status as "Pending"
- Select create invoice button
### Expected Result:
- Navigate to "dashboard/invoices"
- View Customer = "Amy Burns" & Amount = "$9,999.99" & Status = "pending"

## Use Case: "As a user, I need to **delete** an Invoice"

### Steps:
- Start at "/dashboard/invoices"
- Select the Garbage Icon
### Expected Result:
- Invoice removed from invoice list


