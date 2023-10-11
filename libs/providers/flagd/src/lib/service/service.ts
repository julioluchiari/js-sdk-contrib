import { EvaluationContext, JsonValue, Logger, ResolutionDetails } from '@openfeature/server-sdk';

export interface Service {
  connect(
    reconnectCallback: () => void,
    changedCallback: (flagsChanged: string[]) => void,
    disconnectCallback: () => void,
  ): Promise<void>;
  disconnect(): Promise<void>;
  resolveBoolean(flagKey: string, context: EvaluationContext, logger: Logger): Promise<ResolutionDetails<boolean>>;
  resolveString(flagKey: string, context: EvaluationContext, logger: Logger): Promise<ResolutionDetails<string>>;
  resolveNumber(flagKey: string, context: EvaluationContext, logger: Logger): Promise<ResolutionDetails<number>>;
  resolveObject<T extends JsonValue>(
    flagKey: string,
    context: EvaluationContext,
    logger: Logger,
  ): Promise<ResolutionDetails<T>>;
}
