import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_CreateCustomVerificationEmailTemplateCommand, se_CreateCustomVerificationEmailTemplateCommand, } from "../protocols/Aws_query";
export { $Command };
export class CreateCustomVerificationEmailTemplateCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("SimpleEmailService", "CreateCustomVerificationEmailTemplate", {})
    .n("SESClient", "CreateCustomVerificationEmailTemplateCommand")
    .f(void 0, void 0)
    .ser(se_CreateCustomVerificationEmailTemplateCommand)
    .de(de_CreateCustomVerificationEmailTemplateCommand)
    .build() {
}
