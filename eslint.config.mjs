import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    ignores: ["design-demo/**"],
  },
];

export default eslintConfig;
