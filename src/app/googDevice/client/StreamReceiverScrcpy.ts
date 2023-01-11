import { StreamReceiver } from '../../client/StreamReceiver';
import { ParamsStreamScrcpy } from '../../../types/ParamsStreamScrcpy';
import { ParsedUrlQuery } from 'querystring';
import { ACTION } from '../../../common/Action';
import Util from '../../Util';

export class StreamReceiverScrcpy extends StreamReceiver<ParamsStreamScrcpy> {
    public parseParameters(params: ParsedUrlQuery): ParamsStreamScrcpy {
        const typedParams = super.parseParameters(params);
        const { action } = typedParams;
        if (action !== ACTION.STREAM_SCRCPY) {
            throw Error('Incorrect action');
        }
        return {
            ...typedParams,
            action,
            udid: Util.parseStringEnv(params.udid),
            ws: Util.parseStringEnv(params.ws),
            player: Util.parseStringEnv(params.player),
        };
    }
    protected buildDirectWebSocketUrl(): URL {
        return new URL((this.params as ParamsStreamScrcpy).ws);
    }
}
