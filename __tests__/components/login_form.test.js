import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import LoginPage from "@/app/login/page"
import { authenticate } from "@/app/lib/actions"

// Module Mocking:

// Mock the authenticate function
jest.mock("@/lib/actions", () => ({
    authenticate: jest.fn(),
}))

// Mock the Next.js Router
jest.mock("next/navigation", () => ({
    useSearchParams: jest.fn().mockImplementation(() => {
        return {
            get: jest.fn().mockReturnValue(null)
        };
    })
}));

describe("LoginPage", () => {

    beforeEach(() => {
        jest.clearAllMocks() //clears any previous calls 
    })

    it("renders the login form", () => {
        render(<LoginPage />)

        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
        expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument()
    })

    it('submits form with valid data', async () => {

        const user = userEvent.setup()

        render(<LoginPage />)

        const email = screen.getByRole("textbox", { name: /email/i })
        const password = screen.getByLabelText("Password", { selector: 'input' })

        await user.type(email, "user@nextmail.com")
        await user.type(password, "123456")

        expect(email).toHaveValue('user@nextmail.com')
        expect(password).toHaveValue('123456')

        const login = screen.getByRole('button', { name: /log in/i })

        await user.click(login)

        expect(authenticate).toHaveBeenCalledTimes(1);

    })
})

/** Useful Debug Tools:
 * - screen.debug()
 * - console.log(authenticate.mock.calls); -> see what arguments are being passed 
 * - console.log(prettyDOM(screen.getByLabelText("Password", { selector: 'input' }))) -> see the result of getByLabelText
 */