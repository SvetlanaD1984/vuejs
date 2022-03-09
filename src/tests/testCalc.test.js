import { mount } from "@vue/test-utils";
import { nextTick } from "vue/types/umd";
import Calculator from "../components/Calculator.vue";

describe("Calculator", () => {
  it("test first operand input value", () => {
    const wrapepr = mount(Calculator);
    const operand1 = wrapepr.find("input[name=operand1]");
    operand1.setValue("1");
    expect(wrapepr.vm.operand1).toBe(1);
  });

  it("test second operand input value", () => {
    const wrapepr = mount(Calculator);
    const operand2 = wrapepr.find("input[name=operand2]");
    operand2.element.value = "1";
    operand2.trigger("input");
    expect(wrapepr.vm.operand2).toBe(1);
  });

  it("Test sum", () => {
    const wrapepr = mount(Calculator);

    const operand1 = wrapepr.find("input[name=operand1]");
    operand1.setValue("5");
    expect(wrapepr.vm.operand1).toBe(5);

    const operand2 = wrapepr.find("input[name=operand2]");
    operand2.setValue("5");
    expect(wrapepr.vm.operand2).toBe(5);

    const sumBtn = wrapepr.find('button[name="+"]');
    sumBtn.trigger("click");

    expect(wrapepr.vm.result).toBe(10);
  });

  it("Test sub", () => {
    const wrapepr = mount(Calculator);

    const operand1 = wrapepr.find("input[name=operand1]");
    operand1.setValue("10");
    expect(wrapepr.vm.operand1).toBe(10);

    const operand2 = wrapepr.find("input[name=operand2]");
    operand2.setValue("5");
    expect(wrapepr.vm.operand2).toBe(5);

    const sumBtn = wrapepr.find('button[name="-"]');
    sumBtn.trigger("click");

    expect(wrapepr.vm.result).toBe(5);
  });
});
