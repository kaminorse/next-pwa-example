export default interface ReactNativeAction<Payload> {
  type: string;
  payload: Payload;
  error?: boolean;
}
