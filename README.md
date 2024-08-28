## SST does not generate `sst-env.d.ts` for `packages/auth`
> Issue filed [here](https://github.com/sst/ion/issues/945)
- Make sure your AWS CLI credentials are configured to allow access
- `pnpm install`
- `pnpm sst install`
- Observe that an `sst-env.d.ts` file is generated correctly for `packages/frontend`
  - Delete the existing `packages/frontend/sst-env.d.ts` file.
  - Run `pnpm sst dev` and observe that the file is regenerated.
- Observe that no `sst-env.d.ts` file is generated for `packages/auth`
