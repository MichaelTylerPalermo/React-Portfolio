import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_DeleteTemplateCommand, se_DeleteTemplateCommand } from "../protocols/Aws_query";
export { $Command };
export class DeleteTemplateCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("SimpleEmailService", "DeleteTemplate", {})
    .n("SESClient", "DeleteTemplateCommand")
    .f(void 0, void 0)
    .ser(se_DeleteTemplateCommand)
    .de(de_DeleteTemplateCommand)
    .build() {
}
