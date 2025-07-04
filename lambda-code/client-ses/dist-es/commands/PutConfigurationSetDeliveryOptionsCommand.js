import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_PutConfigurationSetDeliveryOptionsCommand, se_PutConfigurationSetDeliveryOptionsCommand, } from "../protocols/Aws_query";
export { $Command };
export class PutConfigurationSetDeliveryOptionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("SimpleEmailService", "PutConfigurationSetDeliveryOptions", {})
    .n("SESClient", "PutConfigurationSetDeliveryOptionsCommand")
    .f(void 0, void 0)
    .ser(se_PutConfigurationSetDeliveryOptionsCommand)
    .de(de_PutConfigurationSetDeliveryOptionsCommand)
    .build() {
}
