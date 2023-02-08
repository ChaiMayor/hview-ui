import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";
import Scrollbar from "../index";

// The component to test
describe("Scrollbar", () => {
	it("should render slot", () => {
		const wrapper = mount(Scrollbar, {
			slots: {
				default: "Hello world",
			},
		});

		// Assert the rendered text of the component
		expect(wrapper.text()).toBe("Hello world");
	});
});
