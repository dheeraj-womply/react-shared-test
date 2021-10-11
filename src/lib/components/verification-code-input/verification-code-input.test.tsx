import React from "react";
import { VerificationCodeInput } from "./index";
import { render } from "@testing-library/react";

test('Verification Code Input are OK', () => {
    const { container } = render(
        <VerificationCodeInput
            fields={6}
            name="code"
            inputMode="numeric"
            type="number"
        />
    )
    const inputs = container.querySelectorAll("input")
    expect(inputs.length).toBe(6)
})