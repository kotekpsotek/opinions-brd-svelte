import { defineConfig } from "vitest/dist/config";

export default defineConfig({
    test: {
        include: ["./tests/**/*.{ts,js}"]
    }
})
