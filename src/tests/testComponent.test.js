import { mount } from "@vue/test-utils";
import TestComponent from "./TestComponent.vue";

describe("TestComponent", () => {
  test("Test props message", () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        message: "Hello from test!",
      },
    });
    expect(wrapper.text()).toEqual("The message is: Hello from test!");
  });
});
