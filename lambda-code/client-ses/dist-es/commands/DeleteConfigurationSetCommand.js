import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_DeleteConfigurationSetCommand, se_DeleteConfigurationSetCommand } from "../protocols/Aws_query";
export { $Command };
export class DeleteConfigurationSetCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("SimpleEmailService", "DeleteConfigurationSet", {})
    .n("SESClient", "DeleteConfigurationSetCommand")
    .f(void 0, void 0)
    .ser(se_DeleteConfigurationSetCommand)
    .de(de_DeleteConfigurationSetCommand)
    .build() {
}
