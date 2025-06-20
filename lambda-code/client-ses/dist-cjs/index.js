"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AccountSendingPausedException: () => AccountSendingPausedException,
  AlreadyExistsException: () => AlreadyExistsException,
  BehaviorOnMXFailure: () => BehaviorOnMXFailure,
  BounceType: () => BounceType,
  BulkEmailStatus: () => BulkEmailStatus,
  CannotDeleteException: () => CannotDeleteException,
  CloneReceiptRuleSetCommand: () => CloneReceiptRuleSetCommand,
  ConfigurationSetAlreadyExistsException: () => ConfigurationSetAlreadyExistsException,
  ConfigurationSetAttribute: () => ConfigurationSetAttribute,
  ConfigurationSetDoesNotExistException: () => ConfigurationSetDoesNotExistException,
  ConfigurationSetSendingPausedException: () => ConfigurationSetSendingPausedException,
  CreateConfigurationSetCommand: () => CreateConfigurationSetCommand,
  CreateConfigurationSetEventDestinationCommand: () => CreateConfigurationSetEventDestinationCommand,
  CreateConfigurationSetTrackingOptionsCommand: () => CreateConfigurationSetTrackingOptionsCommand,
  CreateCustomVerificationEmailTemplateCommand: () => CreateCustomVerificationEmailTemplateCommand,
  CreateReceiptFilterCommand: () => CreateReceiptFilterCommand,
  CreateReceiptRuleCommand: () => CreateReceiptRuleCommand,
  CreateReceiptRuleSetCommand: () => CreateReceiptRuleSetCommand,
  CreateTemplateCommand: () => CreateTemplateCommand,
  CustomMailFromStatus: () => CustomMailFromStatus,
  CustomVerificationEmailInvalidContentException: () => CustomVerificationEmailInvalidContentException,
  CustomVerificationEmailTemplateAlreadyExistsException: () => CustomVerificationEmailTemplateAlreadyExistsException,
  CustomVerificationEmailTemplateDoesNotExistException: () => CustomVerificationEmailTemplateDoesNotExistException,
  DeleteConfigurationSetCommand: () => DeleteConfigurationSetCommand,
  DeleteConfigurationSetEventDestinationCommand: () => DeleteConfigurationSetEventDestinationCommand,
  DeleteConfigurationSetTrackingOptionsCommand: () => DeleteConfigurationSetTrackingOptionsCommand,
  DeleteCustomVerificationEmailTemplateCommand: () => DeleteCustomVerificationEmailTemplateCommand,
  DeleteIdentityCommand: () => DeleteIdentityCommand,
  DeleteIdentityPolicyCommand: () => DeleteIdentityPolicyCommand,
  DeleteReceiptFilterCommand: () => DeleteReceiptFilterCommand,
  DeleteReceiptRuleCommand: () => DeleteReceiptRuleCommand,
  DeleteReceiptRuleSetCommand: () => DeleteReceiptRuleSetCommand,
  DeleteTemplateCommand: () => DeleteTemplateCommand,
  DeleteVerifiedEmailAddressCommand: () => DeleteVerifiedEmailAddressCommand,
  DescribeActiveReceiptRuleSetCommand: () => DescribeActiveReceiptRuleSetCommand,
  DescribeConfigurationSetCommand: () => DescribeConfigurationSetCommand,
  DescribeReceiptRuleCommand: () => DescribeReceiptRuleCommand,
  DescribeReceiptRuleSetCommand: () => DescribeReceiptRuleSetCommand,
  DimensionValueSource: () => DimensionValueSource,
  DsnAction: () => DsnAction,
  EventDestinationAlreadyExistsException: () => EventDestinationAlreadyExistsException,
  EventDestinationDoesNotExistException: () => EventDestinationDoesNotExistException,
  EventType: () => EventType,
  FromEmailAddressNotVerifiedException: () => FromEmailAddressNotVerifiedException,
  GetAccountSendingEnabledCommand: () => GetAccountSendingEnabledCommand,
  GetCustomVerificationEmailTemplateCommand: () => GetCustomVerificationEmailTemplateCommand,
  GetIdentityDkimAttributesCommand: () => GetIdentityDkimAttributesCommand,
  GetIdentityMailFromDomainAttributesCommand: () => GetIdentityMailFromDomainAttributesCommand,
  GetIdentityNotificationAttributesCommand: () => GetIdentityNotificationAttributesCommand,
  GetIdentityPoliciesCommand: () => GetIdentityPoliciesCommand,
  GetIdentityVerificationAttributesCommand: () => GetIdentityVerificationAttributesCommand,
  GetSendQuotaCommand: () => GetSendQuotaCommand,
  GetSendStatisticsCommand: () => GetSendStatisticsCommand,
  GetTemplateCommand: () => GetTemplateCommand,
  IdentityType: () => IdentityType,
  InvalidCloudWatchDestinationException: () => InvalidCloudWatchDestinationException,
  InvalidConfigurationSetException: () => InvalidConfigurationSetException,
  InvalidDeliveryOptionsException: () => InvalidDeliveryOptionsException,
  InvalidFirehoseDestinationException: () => InvalidFirehoseDestinationException,
  InvalidLambdaFunctionException: () => InvalidLambdaFunctionException,
  InvalidPolicyException: () => InvalidPolicyException,
  InvalidRenderingParameterException: () => InvalidRenderingParameterException,
  InvalidS3ConfigurationException: () => InvalidS3ConfigurationException,
  InvalidSNSDestinationException: () => InvalidSNSDestinationException,
  InvalidSnsTopicException: () => InvalidSnsTopicException,
  InvalidTemplateException: () => InvalidTemplateException,
  InvalidTrackingOptionsException: () => InvalidTrackingOptionsException,
  InvocationType: () => InvocationType,
  LimitExceededException: () => LimitExceededException,
  ListConfigurationSetsCommand: () => ListConfigurationSetsCommand,
  ListCustomVerificationEmailTemplatesCommand: () => ListCustomVerificationEmailTemplatesCommand,
  ListIdentitiesCommand: () => ListIdentitiesCommand,
  ListIdentityPoliciesCommand: () => ListIdentityPoliciesCommand,
  ListReceiptFiltersCommand: () => ListReceiptFiltersCommand,
  ListReceiptRuleSetsCommand: () => ListReceiptRuleSetsCommand,
  ListTemplatesCommand: () => ListTemplatesCommand,
  ListVerifiedEmailAddressesCommand: () => ListVerifiedEmailAddressesCommand,
  MailFromDomainNotVerifiedException: () => MailFromDomainNotVerifiedException,
  MessageRejected: () => MessageRejected,
  MissingRenderingAttributeException: () => MissingRenderingAttributeException,
  NotificationType: () => NotificationType,
  ProductionAccessNotGrantedException: () => ProductionAccessNotGrantedException,
  PutConfigurationSetDeliveryOptionsCommand: () => PutConfigurationSetDeliveryOptionsCommand,
  PutIdentityPolicyCommand: () => PutIdentityPolicyCommand,
  ReceiptFilterPolicy: () => ReceiptFilterPolicy,
  ReorderReceiptRuleSetCommand: () => ReorderReceiptRuleSetCommand,
  RuleDoesNotExistException: () => RuleDoesNotExistException,
  RuleSetDoesNotExistException: () => RuleSetDoesNotExistException,
  SES: () => SES,
  SESClient: () => SESClient,
  SESServiceException: () => SESServiceException,
  SNSActionEncoding: () => SNSActionEncoding,
  SendBounceCommand: () => SendBounceCommand,
  SendBulkTemplatedEmailCommand: () => SendBulkTemplatedEmailCommand,
  SendCustomVerificationEmailCommand: () => SendCustomVerificationEmailCommand,
  SendEmailCommand: () => SendEmailCommand,
  SendRawEmailCommand: () => SendRawEmailCommand,
  SendTemplatedEmailCommand: () => SendTemplatedEmailCommand,
  SetActiveReceiptRuleSetCommand: () => SetActiveReceiptRuleSetCommand,
  SetIdentityDkimEnabledCommand: () => SetIdentityDkimEnabledCommand,
  SetIdentityFeedbackForwardingEnabledCommand: () => SetIdentityFeedbackForwardingEnabledCommand,
  SetIdentityHeadersInNotificationsEnabledCommand: () => SetIdentityHeadersInNotificationsEnabledCommand,
  SetIdentityMailFromDomainCommand: () => SetIdentityMailFromDomainCommand,
  SetIdentityNotificationTopicCommand: () => SetIdentityNotificationTopicCommand,
  SetReceiptRulePositionCommand: () => SetReceiptRulePositionCommand,
  StopScope: () => StopScope,
  TemplateDoesNotExistException: () => TemplateDoesNotExistException,
  TestRenderTemplateCommand: () => TestRenderTemplateCommand,
  TlsPolicy: () => TlsPolicy,
  TrackingOptionsAlreadyExistsException: () => TrackingOptionsAlreadyExistsException,
  TrackingOptionsDoesNotExistException: () => TrackingOptionsDoesNotExistException,
  UpdateAccountSendingEnabledCommand: () => UpdateAccountSendingEnabledCommand,
  UpdateConfigurationSetEventDestinationCommand: () => UpdateConfigurationSetEventDestinationCommand,
  UpdateConfigurationSetReputationMetricsEnabledCommand: () => UpdateConfigurationSetReputationMetricsEnabledCommand,
  UpdateConfigurationSetSendingEnabledCommand: () => UpdateConfigurationSetSendingEnabledCommand,
  UpdateConfigurationSetTrackingOptionsCommand: () => UpdateConfigurationSetTrackingOptionsCommand,
  UpdateCustomVerificationEmailTemplateCommand: () => UpdateCustomVerificationEmailTemplateCommand,
  UpdateReceiptRuleCommand: () => UpdateReceiptRuleCommand,
  UpdateTemplateCommand: () => UpdateTemplateCommand,
  VerificationStatus: () => VerificationStatus,
  VerifyDomainDkimCommand: () => VerifyDomainDkimCommand,
  VerifyDomainIdentityCommand: () => VerifyDomainIdentityCommand,
  VerifyEmailAddressCommand: () => VerifyEmailAddressCommand,
  VerifyEmailIdentityCommand: () => VerifyEmailIdentityCommand,
  __Client: () => import_smithy_client.Client,
  paginateListCustomVerificationEmailTemplates: () => paginateListCustomVerificationEmailTemplates,
  paginateListIdentities: () => paginateListIdentities,
  waitForIdentityExists: () => waitForIdentityExists,
  waitUntilIdentityExists: () => waitUntilIdentityExists
});
module.exports = __toCommonJS(index_exports);

// src/SESClient.ts
var import_middleware_host_header = require("@aws-sdk/middleware-host-header");
var import_middleware_logger = require("@aws-sdk/middleware-logger");
var import_middleware_recursion_detection = require("@aws-sdk/middleware-recursion-detection");
var import_middleware_user_agent = require("@aws-sdk/middleware-user-agent");
var import_config_resolver = require("@smithy/config-resolver");
var import_core = require("@smithy/core");
var import_middleware_content_length = require("@smithy/middleware-content-length");
var import_middleware_endpoint = require("@smithy/middleware-endpoint");
var import_middleware_retry = require("@smithy/middleware-retry");

var import_httpAuthSchemeProvider = require("./auth/httpAuthSchemeProvider");

// src/endpoint/EndpointParameters.ts
var resolveClientEndpointParameters = /* @__PURE__ */ __name((options) => {
  return Object.assign(options, {
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "ses"
  });
}, "resolveClientEndpointParameters");
var commonParams = {
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
};

// src/SESClient.ts
var import_runtimeConfig = require("././runtimeConfig");

// src/runtimeExtensions.ts
var import_region_config_resolver = require("@aws-sdk/region-config-resolver");
var import_protocol_http = require("@smithy/protocol-http");
var import_smithy_client = require("@smithy/smithy-client");

// src/auth/httpAuthExtensionConfiguration.ts
var getHttpAuthExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
  let _credentials = runtimeConfig.credentials;
  return {
    setHttpAuthScheme(httpAuthScheme) {
      const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
      if (index === -1) {
        _httpAuthSchemes.push(httpAuthScheme);
      } else {
        _httpAuthSchemes.splice(index, 1, httpAuthScheme);
      }
    },
    httpAuthSchemes() {
      return _httpAuthSchemes;
    },
    setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider() {
      return _httpAuthSchemeProvider;
    },
    setCredentials(credentials) {
      _credentials = credentials;
    },
    credentials() {
      return _credentials;
    }
  };
}, "getHttpAuthExtensionConfiguration");
var resolveHttpAuthRuntimeConfig = /* @__PURE__ */ __name((config) => {
  return {
    httpAuthSchemes: config.httpAuthSchemes(),
    httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
    credentials: config.credentials()
  };
}, "resolveHttpAuthRuntimeConfig");

// src/runtimeExtensions.ts
var resolveRuntimeExtensions = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
  const extensionConfiguration = Object.assign(
    (0, import_region_config_resolver.getAwsRegionExtensionConfiguration)(runtimeConfig),
    (0, import_smithy_client.getDefaultExtensionConfiguration)(runtimeConfig),
    (0, import_protocol_http.getHttpHandlerExtensionConfiguration)(runtimeConfig),
    getHttpAuthExtensionConfiguration(runtimeConfig)
  );
  extensions.forEach((extension) => extension.configure(extensionConfiguration));
  return Object.assign(
    runtimeConfig,
    (0, import_region_config_resolver.resolveAwsRegionExtensionConfiguration)(extensionConfiguration),
    (0, import_smithy_client.resolveDefaultRuntimeConfig)(extensionConfiguration),
    (0, import_protocol_http.resolveHttpHandlerRuntimeConfig)(extensionConfiguration),
    resolveHttpAuthRuntimeConfig(extensionConfiguration)
  );
}, "resolveRuntimeExtensions");

// src/SESClient.ts
var SESClient = class extends import_smithy_client.Client {
  static {
    __name(this, "SESClient");
  }
  /**
   * The resolved configuration of SESClient class. This is resolved and normalized from the {@link SESClientConfig | constructor configuration interface}.
   */
  config;
  constructor(...[configuration]) {
    const _config_0 = (0, import_runtimeConfig.getRuntimeConfig)(configuration || {});
    super(_config_0);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = (0, import_middleware_user_agent.resolveUserAgentConfig)(_config_1);
    const _config_3 = (0, import_middleware_retry.resolveRetryConfig)(_config_2);
    const _config_4 = (0, import_config_resolver.resolveRegionConfig)(_config_3);
    const _config_5 = (0, import_middleware_host_header.resolveHostHeaderConfig)(_config_4);
    const _config_6 = (0, import_middleware_endpoint.resolveEndpointConfig)(_config_5);
    const _config_7 = (0, import_httpAuthSchemeProvider.resolveHttpAuthSchemeConfig)(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use((0, import_middleware_user_agent.getUserAgentPlugin)(this.config));
    this.middlewareStack.use((0, import_middleware_retry.getRetryPlugin)(this.config));
    this.middlewareStack.use((0, import_middleware_content_length.getContentLengthPlugin)(this.config));
    this.middlewareStack.use((0, import_middleware_host_header.getHostHeaderPlugin)(this.config));
    this.middlewareStack.use((0, import_middleware_logger.getLoggerPlugin)(this.config));
    this.middlewareStack.use((0, import_middleware_recursion_detection.getRecursionDetectionPlugin)(this.config));
    this.middlewareStack.use(
      (0, import_core.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
        httpAuthSchemeParametersProvider: import_httpAuthSchemeProvider.defaultSESHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: /* @__PURE__ */ __name(async (config) => new import_core.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": config.credentials
        }), "identityProviderConfigProvider")
      })
    );
    this.middlewareStack.use((0, import_core.getHttpSigningPlugin)(this.config));
  }
  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy() {
    super.destroy();
  }
};

// src/SES.ts


// src/commands/CloneReceiptRuleSetCommand.ts

var import_middleware_serde = require("@smithy/middleware-serde");


// src/protocols/Aws_query.ts
var import_core2 = require("@aws-sdk/core");



// src/models/SESServiceException.ts

var SESServiceException = class _SESServiceException extends import_smithy_client.ServiceException {
  static {
    __name(this, "SESServiceException");
  }
  /**
   * @internal
   */
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, _SESServiceException.prototype);
  }
};

// src/models/models_0.ts
var AccountSendingPausedException = class _AccountSendingPausedException extends SESServiceException {
  static {
    __name(this, "AccountSendingPausedException");
  }
  name = "AccountSendingPausedException";
  $fault = "client";
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "AccountSendingPausedException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _AccountSendingPausedException.prototype);
  }
};
var AlreadyExistsException = class _AlreadyExistsException extends SESServiceException {
  static {
    __name(this, "AlreadyExistsException");
  }
  name = "AlreadyExistsException";
  $fault = "client";
  /**
   * <p>Indicates that a resource could not be created because the resource name already
   *             exists.</p>
   * @public
   */
  Name;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "AlreadyExistsException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _AlreadyExistsException.prototype);
    this.Name = opts.Name;
  }
};
var BehaviorOnMXFailure = {
  RejectMessage: "RejectMessage",
  UseDefaultValue: "UseDefaultValue"
};
var BounceType = {
  ContentRejected: "ContentRejected",
  DoesNotExist: "DoesNotExist",
  ExceededQuota: "ExceededQuota",
  MessageTooLarge: "MessageTooLarge",
  TemporaryFailure: "TemporaryFailure",
  Undefined: "Undefined"
};
var DsnAction = {
  DELAYED: "delayed",
  DELIVERED: "delivered",
  EXPANDED: "expanded",
  FAILED: "failed",
  RELAYED: "relayed"
};
var BulkEmailStatus = {
  AccountDailyQuotaExceeded: "AccountDailyQuotaExceeded",
  AccountSendingPaused: "AccountSendingPaused",
  AccountSuspended: "AccountSuspended",
  AccountThrottled: "AccountThrottled",
  ConfigurationSetDoesNotExist: "ConfigurationSetDoesNotExist",
  ConfigurationSetSendingPaused: "ConfigurationSetSendingPaused",
  Failed: "Failed",
  InvalidParameterValue: "InvalidParameterValue",
  InvalidSendingPoolName: "InvalidSendingPoolName",
  MailFromDomainNotVerified: "MailFromDomainNotVerified",
  MessageRejected: "MessageRejected",
  Success: "Success",
  TemplateDoesNotExist: "TemplateDoesNotExist",
  TransientFailure: "TransientFailure"
};
var CannotDeleteException = class _CannotDeleteException extends SESServiceException {
  static {
    __name(this, "CannotDeleteException");
  }
  name = "CannotDeleteException";
  $fault = "client";
  /**
   * <p>Indicates that a resource could not be deleted because no resource with the specified
   *             name exists.</p>
   * @public
   */
  Name;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "CannotDeleteException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _CannotDeleteException.prototype);
    this.Name = opts.Name;
  }
};
var LimitExceededException = class _LimitExceededException extends SESServiceException {
  static {
    __name(this, "LimitExceededException");
  }
  name = "LimitExceededException";
  $fault = "client";
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _LimitExceededException.prototype);
  }
};
var RuleSetDoesNotExistException = class _RuleSetDoesNotExistException extends SESServiceException {
  static {
    __name(this, "RuleSetDoesNotExistException");
  }
  name = "RuleSetDoesNotExistException";
  $fault = "client";
  /**
   * <p>Indicates that the named receipt rule set does not exist.</p>
   * @public
   */
  Name;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "RuleSetDoesNotExistException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _RuleSetDoesNotExistException.prototype);
    this.Name = opts.Name;
  }
};
var DimensionValueSource = {
  EMAIL_HEADER: "emailHeader",
  LINK_TAG: "linkTag",
  MESSAGE_TAG: "messageTag"
};
var ConfigurationSetAlreadyExistsException = class _ConfigurationSetAlreadyExistsException extends SESServiceException {
  static {
    __name(this, "ConfigurationSetAlreadyExistsException");
  }
  name = "ConfigurationSetAlreadyExistsException";
  $fault = "client";
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   * @public
   */
  ConfigurationSetName;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "ConfigurationSetAlreadyExistsException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ConfigurationSetAlreadyExistsException.prototype);
    this.ConfigurationSetName = opts.ConfigurationSetName;
  }
};
var ConfigurationSetAttribute = {
  DELIVERY_OPTIONS: "deliveryOptions",
  EVENT_DESTINATIONS: "eventDestinations",
  REPUTATION_OPTIONS: "reputationOptions",
  TRACKING_OPTIONS: "trackingOptions"
};
var ConfigurationSetDoesNotExistException = class _ConfigurationSetDoesNotExistException extends SESServiceException {
  static {
    __name(this, "ConfigurationSetDoesNotExistException");
  }
  name = "ConfigurationSetDoesNotExistException";
  $fault = "client";
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   * @public
   */
  ConfigurationSetName;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "ConfigurationSetDoesNotExistException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ConfigurationSetDoesNotExistException.prototype);
    this.ConfigurationSetName = opts.ConfigurationSetName;
  }
};
var ConfigurationSetSendingPausedException = class _ConfigurationSetSendingPausedException extends SESServiceException {
  static {
    __name(this, "ConfigurationSetSendingPausedException");
  }
  name = "ConfigurationSetSendingPausedException";
  $fault = "client";
  /**
   * <p>The name of the configuration set for which email sending is disabled.</p>
   * @public
   */
  ConfigurationSetName;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "ConfigurationSetSendingPausedException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ConfigurationSetSendingPausedException.prototype);
    this.ConfigurationSetName = opts.ConfigurationSetName;
  }
};
var InvalidConfigurationSetException = class _InvalidConfigurationSetException extends SESServiceException {
  static {
    __name(this, "InvalidConfigurationSetException");
  }
  name = "InvalidConfigurationSetException";
  $fault = "client";
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidConfigurationSetException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidConfigurationSetException.prototype);
  }
};
var EventType = {
  BOUNCE: "bounce",
  CLICK: "click",
  COMPLAINT: "complaint",
  DELIVERY: "delivery",
  OPEN: "open",
  REJECT: "reject",
  RENDERING_FAILURE: "renderingFailure",
  SEND: "send"
};
var EventDestinationAlreadyExistsException = class _EventDestinationAlreadyExistsException extends SESServiceException {
  static {
    __name(this, "EventDestinationAlreadyExistsException");
  }
  name = "EventDestinationAlreadyExistsException";
  $fault = "client";
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   * @public
   */
  ConfigurationSetName;
  /**
   * <p>Indicates that the event destination does not exist.</p>
   * @public
   */
  EventDestinationName;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "EventDestinationAlreadyExistsException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _EventDestinationAlreadyExistsException.prototype);
    this.ConfigurationSetName = opts.ConfigurationSetName;
    this.EventDestinationName = opts.EventDestinationName;
  }
};
var InvalidCloudWatchDestinationException = class _InvalidCloudWatchDestinationException extends SESServiceException {
  static {
    __name(this, "InvalidCloudWatchDestinationException");
  }
  name = "InvalidCloudWatchDestinationException";
  $fault = "client";
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   * @public
   */
  ConfigurationSetName;
  /**
   * <p>Indicates that the event destination does not exist.</p>
   * @public
   */
  EventDestinationName;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidCloudWatchDestinationException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidCloudWatchDestinationException.prototype);
    this.ConfigurationSetName = opts.ConfigurationSetName;
    this.EventDestinationName = opts.EventDestinationName;
  }
};
var InvalidFirehoseDestinationException = class _InvalidFirehoseDestinationException extends SESServiceException {
  static {
    __name(this, "InvalidFirehoseDestinationException");
  }
  name = "InvalidFirehoseDestinationException";
  $fault = "client";
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   * @public
   */
  ConfigurationSetName;
  /**
   * <p>Indicates that the event destination does not exist.</p>
   * @public
   */
  EventDestinationName;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidFirehoseDestinationException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidFirehoseDestinationException.prototype);
    this.ConfigurationSetName = opts.ConfigurationSetName;
    this.EventDestinationName = opts.EventDestinationName;
  }
};
var InvalidSNSDestinationException = class _InvalidSNSDestinationException extends SESServiceException {
  static {
    __name(this, "InvalidSNSDestinationException");
  }
  name = "InvalidSNSDestinationException";
  $fault = "client";
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   * @public
   */
  ConfigurationSetName;
  /**
   * <p>Indicates that the event destination does not exist.</p>
   * @public
   */
  EventDestinationName;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidSNSDestinationException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidSNSDestinationException.prototype);
    this.ConfigurationSetName = opts.ConfigurationSetName;
    this.EventDestinationName = opts.EventDestinationName;
  }
};
var InvalidTrackingOptionsException = class _InvalidTrackingOptionsException extends SESServiceException {
  static {
    __name(this, "InvalidTrackingOptionsException");
  }
  name = "InvalidTrackingOptionsException";
  $fault = "client";
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidTrackingOptionsException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidTrackingOptionsException.prototype);
  }
};
var TrackingOptionsAlreadyExistsException = class _TrackingOptionsAlreadyExistsException extends SESServiceException {
  static {
    __name(this, "TrackingOptionsAlreadyExistsException");
  }
  name = "TrackingOptionsAlreadyExistsException";
  $fault = "client";
  /**
   * <p>Indicates that a TrackingOptions object already exists in the specified configuration
   *             set.</p>
   * @public
   */
  ConfigurationSetName;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "TrackingOptionsAlreadyExistsException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _TrackingOptionsAlreadyExistsException.prototype);
    this.ConfigurationSetName = opts.ConfigurationSetName;
  }
};
var CustomVerificationEmailInvalidContentException = class _CustomVerificationEmailInvalidContentException extends SESServiceException {
  static {
    __name(this, "CustomVerificationEmailInvalidContentException");
  }
  name = "CustomVerificationEmailInvalidContentException";
  $fault = "client";
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "CustomVerificationEmailInvalidContentException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _CustomVerificationEmailInvalidContentException.prototype);
  }
};
var CustomVerificationEmailTemplateAlreadyExistsException = class _CustomVerificationEmailTemplateAlreadyExistsException extends SESServiceException {
  static {
    __name(this, "CustomVerificationEmailTemplateAlreadyExistsException");
  }
  name = "CustomVerificationEmailTemplateAlreadyExistsException";
  $fault = "client";
  /**
   * <p>Indicates that the provided custom verification email template with the specified
   *             template name already exists.</p>
   * @public
   */
  CustomVerificationEmailTemplateName;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "CustomVerificationEmailTemplateAlreadyExistsException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _CustomVerificationEmailTemplateAlreadyExistsException.prototype);
    this.CustomVerificationEmailTemplateName = opts.CustomVerificationEmailTemplateName;
  }
};
var FromEmailAddressNotVerifiedException = class _FromEmailAddressNotVerifiedException extends SESServiceException {
  static {
    __name(this, "FromEmailAddressNotVerifiedException");
  }
  name = "FromEmailAddressNotVerifiedException";
  $fault = "client";
  /**
   * <p>Indicates that the from email address associated with the custom verification email
   *             template is not verified.</p>
   * @public
   */
  FromEmailAddress;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "FromEmailAddressNotVerifiedException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _FromEmailAddressNotVerifiedException.prototype);
    this.FromEmailAddress = opts.FromEmailAddress;
  }
};
var ReceiptFilterPolicy = {
  Allow: "Allow",
  Block: "Block"
};
var InvocationType = {
  Event: "Event",
  RequestResponse: "RequestResponse"
};
var SNSActionEncoding = {
  Base64: "Base64",
  UTF8: "UTF-8"
};
var StopScope = {
  RULE_SET: "RuleSet"
};
var TlsPolicy = {
  Optional: "Optional",
  Require: "Require"
};
var InvalidLambdaFunctionException = class _InvalidLambdaFunctionException extends SESServiceException {
  static {
    __name(this, "InvalidLambdaFunctionException");
  }
  name = "InvalidLambdaFunctionException";
  $fault = "client";
  /**
   * <p>Indicates that the ARN of the function was not found.</p>
   * @public
   */
  FunctionArn;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidLambdaFunctionException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidLambdaFunctionException.prototype);
    this.FunctionArn = opts.FunctionArn;
  }
};
var InvalidS3ConfigurationException = class _InvalidS3ConfigurationException extends SESServiceException {
  static {
    __name(this, "InvalidS3ConfigurationException");
  }
  name = "InvalidS3ConfigurationException";
  $fault = "client";
  /**
   * <p>Indicated that the S3 Bucket was not found.</p>
   * @public
   */
  Bucket;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidS3ConfigurationException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidS3ConfigurationException.prototype);
    this.Bucket = opts.Bucket;
  }
};
var InvalidSnsTopicException = class _InvalidSnsTopicException extends SESServiceException {
  static {
    __name(this, "InvalidSnsTopicException");
  }
  name = "InvalidSnsTopicException";
  $fault = "client";
  /**
   * <p>Indicates that the topic does not exist.</p>
   * @public
   */
  Topic;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidSnsTopicException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidSnsTopicException.prototype);
    this.Topic = opts.Topic;
  }
};
var RuleDoesNotExistException = class _RuleDoesNotExistException extends SESServiceException {
  static {
    __name(this, "RuleDoesNotExistException");
  }
  name = "RuleDoesNotExistException";
  $fault = "client";
  /**
   * <p>Indicates that the named receipt rule does not exist.</p>
   * @public
   */
  Name;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "RuleDoesNotExistException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _RuleDoesNotExistException.prototype);
    this.Name = opts.Name;
  }
};
var InvalidTemplateException = class _InvalidTemplateException extends SESServiceException {
  static {
    __name(this, "InvalidTemplateException");
  }
  name = "InvalidTemplateException";
  $fault = "client";
  TemplateName;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidTemplateException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidTemplateException.prototype);
    this.TemplateName = opts.TemplateName;
  }
};
var CustomMailFromStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TemporaryFailure: "TemporaryFailure"
};
var CustomVerificationEmailTemplateDoesNotExistException = class _CustomVerificationEmailTemplateDoesNotExistException extends SESServiceException {
  static {
    __name(this, "CustomVerificationEmailTemplateDoesNotExistException");
  }
  name = "CustomVerificationEmailTemplateDoesNotExistException";
  $fault = "client";
  /**
   * <p>Indicates that the provided custom verification email template does not exist.</p>
   * @public
   */
  CustomVerificationEmailTemplateName;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "CustomVerificationEmailTemplateDoesNotExistException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _CustomVerificationEmailTemplateDoesNotExistException.prototype);
    this.CustomVerificationEmailTemplateName = opts.CustomVerificationEmailTemplateName;
  }
};
var EventDestinationDoesNotExistException = class _EventDestinationDoesNotExistException extends SESServiceException {
  static {
    __name(this, "EventDestinationDoesNotExistException");
  }
  name = "EventDestinationDoesNotExistException";
  $fault = "client";
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   * @public
   */
  ConfigurationSetName;
  /**
   * <p>Indicates that the event destination does not exist.</p>
   * @public
   */
  EventDestinationName;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "EventDestinationDoesNotExistException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _EventDestinationDoesNotExistException.prototype);
    this.ConfigurationSetName = opts.ConfigurationSetName;
    this.EventDestinationName = opts.EventDestinationName;
  }
};
var TrackingOptionsDoesNotExistException = class _TrackingOptionsDoesNotExistException extends SESServiceException {
  static {
    __name(this, "TrackingOptionsDoesNotExistException");
  }
  name = "TrackingOptionsDoesNotExistException";
  $fault = "client";
  /**
   * <p>Indicates that a TrackingOptions object does not exist in the specified configuration
   *             set.</p>
   * @public
   */
  ConfigurationSetName;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "TrackingOptionsDoesNotExistException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _TrackingOptionsDoesNotExistException.prototype);
    this.ConfigurationSetName = opts.ConfigurationSetName;
  }
};
var VerificationStatus = {
  Failed: "Failed",
  NotStarted: "NotStarted",
  Pending: "Pending",
  Success: "Success",
  TemporaryFailure: "TemporaryFailure"
};
var TemplateDoesNotExistException = class _TemplateDoesNotExistException extends SESServiceException {
  static {
    __name(this, "TemplateDoesNotExistException");
  }
  name = "TemplateDoesNotExistException";
  $fault = "client";
  TemplateName;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "TemplateDoesNotExistException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _TemplateDoesNotExistException.prototype);
    this.TemplateName = opts.TemplateName;
  }
};
var IdentityType = {
  Domain: "Domain",
  EmailAddress: "EmailAddress"
};
var InvalidDeliveryOptionsException = class _InvalidDeliveryOptionsException extends SESServiceException {
  static {
    __name(this, "InvalidDeliveryOptionsException");
  }
  name = "InvalidDeliveryOptionsException";
  $fault = "client";
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidDeliveryOptionsException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidDeliveryOptionsException.prototype);
  }
};
var InvalidPolicyException = class _InvalidPolicyException extends SESServiceException {
  static {
    __name(this, "InvalidPolicyException");
  }
  name = "InvalidPolicyException";
  $fault = "client";
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidPolicyException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidPolicyException.prototype);
  }
};
var InvalidRenderingParameterException = class _InvalidRenderingParameterException extends SESServiceException {
  static {
    __name(this, "InvalidRenderingParameterException");
  }
  name = "InvalidRenderingParameterException";
  $fault = "client";
  TemplateName;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidRenderingParameterException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidRenderingParameterException.prototype);
    this.TemplateName = opts.TemplateName;
  }
};
var MailFromDomainNotVerifiedException = class _MailFromDomainNotVerifiedException extends SESServiceException {
  static {
    __name(this, "MailFromDomainNotVerifiedException");
  }
  name = "MailFromDomainNotVerifiedException";
  $fault = "client";
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "MailFromDomainNotVerifiedException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _MailFromDomainNotVerifiedException.prototype);
  }
};
var MessageRejected = class _MessageRejected extends SESServiceException {
  static {
    __name(this, "MessageRejected");
  }
  name = "MessageRejected";
  $fault = "client";
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "MessageRejected",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _MessageRejected.prototype);
  }
};
var MissingRenderingAttributeException = class _MissingRenderingAttributeException extends SESServiceException {
  static {
    __name(this, "MissingRenderingAttributeException");
  }
  name = "MissingRenderingAttributeException";
  $fault = "client";
  TemplateName;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "MissingRenderingAttributeException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _MissingRenderingAttributeException.prototype);
    this.TemplateName = opts.TemplateName;
  }
};
var NotificationType = {
  Bounce: "Bounce",
  Complaint: "Complaint",
  Delivery: "Delivery"
};
var ProductionAccessNotGrantedException = class _ProductionAccessNotGrantedException extends SESServiceException {
  static {
    __name(this, "ProductionAccessNotGrantedException");
  }
  name = "ProductionAccessNotGrantedException";
  $fault = "client";
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "ProductionAccessNotGrantedException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ProductionAccessNotGrantedException.prototype);
  }
};

// src/protocols/Aws_query.ts
var se_CloneReceiptRuleSetCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_CloneReceiptRuleSetRequest(input, context),
    [_A]: _CRRS,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_CloneReceiptRuleSetCommand");
var se_CreateConfigurationSetCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_CreateConfigurationSetRequest(input, context),
    [_A]: _CCS,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_CreateConfigurationSetCommand");
var se_CreateConfigurationSetEventDestinationCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_CreateConfigurationSetEventDestinationRequest(input, context),
    [_A]: _CCSED,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_CreateConfigurationSetEventDestinationCommand");
var se_CreateConfigurationSetTrackingOptionsCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_CreateConfigurationSetTrackingOptionsRequest(input, context),
    [_A]: _CCSTO,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_CreateConfigurationSetTrackingOptionsCommand");
var se_CreateCustomVerificationEmailTemplateCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_CreateCustomVerificationEmailTemplateRequest(input, context),
    [_A]: _CCVET,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_CreateCustomVerificationEmailTemplateCommand");
var se_CreateReceiptFilterCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_CreateReceiptFilterRequest(input, context),
    [_A]: _CRF,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_CreateReceiptFilterCommand");
var se_CreateReceiptRuleCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_CreateReceiptRuleRequest(input, context),
    [_A]: _CRR,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_CreateReceiptRuleCommand");
var se_CreateReceiptRuleSetCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_CreateReceiptRuleSetRequest(input, context),
    [_A]: _CRRSr,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_CreateReceiptRuleSetCommand");
var se_CreateTemplateCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_CreateTemplateRequest(input, context),
    [_A]: _CT,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_CreateTemplateCommand");
var se_DeleteConfigurationSetCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_DeleteConfigurationSetRequest(input, context),
    [_A]: _DCS,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_DeleteConfigurationSetCommand");
var se_DeleteConfigurationSetEventDestinationCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_DeleteConfigurationSetEventDestinationRequest(input, context),
    [_A]: _DCSED,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_DeleteConfigurationSetEventDestinationCommand");
var se_DeleteConfigurationSetTrackingOptionsCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_DeleteConfigurationSetTrackingOptionsRequest(input, context),
    [_A]: _DCSTO,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_DeleteConfigurationSetTrackingOptionsCommand");
var se_DeleteCustomVerificationEmailTemplateCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_DeleteCustomVerificationEmailTemplateRequest(input, context),
    [_A]: _DCVET,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_DeleteCustomVerificationEmailTemplateCommand");
var se_DeleteIdentityCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_DeleteIdentityRequest(input, context),
    [_A]: _DI,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_DeleteIdentityCommand");
var se_DeleteIdentityPolicyCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_DeleteIdentityPolicyRequest(input, context),
    [_A]: _DIP,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_DeleteIdentityPolicyCommand");
var se_DeleteReceiptFilterCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_DeleteReceiptFilterRequest(input, context),
    [_A]: _DRF,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_DeleteReceiptFilterCommand");
var se_DeleteReceiptRuleCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_DeleteReceiptRuleRequest(input, context),
    [_A]: _DRR,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_DeleteReceiptRuleCommand");
var se_DeleteReceiptRuleSetCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_DeleteReceiptRuleSetRequest(input, context),
    [_A]: _DRRS,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_DeleteReceiptRuleSetCommand");
var se_DeleteTemplateCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_DeleteTemplateRequest(input, context),
    [_A]: _DT,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_DeleteTemplateCommand");
var se_DeleteVerifiedEmailAddressCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_DeleteVerifiedEmailAddressRequest(input, context),
    [_A]: _DVEA,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_DeleteVerifiedEmailAddressCommand");
var se_DescribeActiveReceiptRuleSetCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_DescribeActiveReceiptRuleSetRequest(input, context),
    [_A]: _DARRS,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_DescribeActiveReceiptRuleSetCommand");
var se_DescribeConfigurationSetCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_DescribeConfigurationSetRequest(input, context),
    [_A]: _DCSe,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_DescribeConfigurationSetCommand");
var se_DescribeReceiptRuleCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_DescribeReceiptRuleRequest(input, context),
    [_A]: _DRRe,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_DescribeReceiptRuleCommand");
var se_DescribeReceiptRuleSetCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_DescribeReceiptRuleSetRequest(input, context),
    [_A]: _DRRSe,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_DescribeReceiptRuleSetCommand");
var se_GetAccountSendingEnabledCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _GASE,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_GetAccountSendingEnabledCommand");
var se_GetCustomVerificationEmailTemplateCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_GetCustomVerificationEmailTemplateRequest(input, context),
    [_A]: _GCVET,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_GetCustomVerificationEmailTemplateCommand");
var se_GetIdentityDkimAttributesCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_GetIdentityDkimAttributesRequest(input, context),
    [_A]: _GIDA,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_GetIdentityDkimAttributesCommand");
var se_GetIdentityMailFromDomainAttributesCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_GetIdentityMailFromDomainAttributesRequest(input, context),
    [_A]: _GIMFDA,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_GetIdentityMailFromDomainAttributesCommand");
var se_GetIdentityNotificationAttributesCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_GetIdentityNotificationAttributesRequest(input, context),
    [_A]: _GINA,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_GetIdentityNotificationAttributesCommand");
var se_GetIdentityPoliciesCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_GetIdentityPoliciesRequest(input, context),
    [_A]: _GIP,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_GetIdentityPoliciesCommand");
var se_GetIdentityVerificationAttributesCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_GetIdentityVerificationAttributesRequest(input, context),
    [_A]: _GIVA,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_GetIdentityVerificationAttributesCommand");
var se_GetSendQuotaCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _GSQ,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_GetSendQuotaCommand");
var se_GetSendStatisticsCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _GSS,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_GetSendStatisticsCommand");
var se_GetTemplateCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_GetTemplateRequest(input, context),
    [_A]: _GT,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_GetTemplateCommand");
var se_ListConfigurationSetsCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_ListConfigurationSetsRequest(input, context),
    [_A]: _LCS,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_ListConfigurationSetsCommand");
var se_ListCustomVerificationEmailTemplatesCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_ListCustomVerificationEmailTemplatesRequest(input, context),
    [_A]: _LCVET,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_ListCustomVerificationEmailTemplatesCommand");
var se_ListIdentitiesCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_ListIdentitiesRequest(input, context),
    [_A]: _LI,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_ListIdentitiesCommand");
var se_ListIdentityPoliciesCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_ListIdentityPoliciesRequest(input, context),
    [_A]: _LIP,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_ListIdentityPoliciesCommand");
var se_ListReceiptFiltersCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_ListReceiptFiltersRequest(input, context),
    [_A]: _LRF,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_ListReceiptFiltersCommand");
var se_ListReceiptRuleSetsCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_ListReceiptRuleSetsRequest(input, context),
    [_A]: _LRRS,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_ListReceiptRuleSetsCommand");
var se_ListTemplatesCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_ListTemplatesRequest(input, context),
    [_A]: _LT,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_ListTemplatesCommand");
var se_ListVerifiedEmailAddressesCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _LVEA,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_ListVerifiedEmailAddressesCommand");
var se_PutConfigurationSetDeliveryOptionsCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_PutConfigurationSetDeliveryOptionsRequest(input, context),
    [_A]: _PCSDO,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_PutConfigurationSetDeliveryOptionsCommand");
var se_PutIdentityPolicyCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_PutIdentityPolicyRequest(input, context),
    [_A]: _PIP,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_PutIdentityPolicyCommand");
var se_ReorderReceiptRuleSetCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_ReorderReceiptRuleSetRequest(input, context),
    [_A]: _RRRS,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_ReorderReceiptRuleSetCommand");
var se_SendBounceCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_SendBounceRequest(input, context),
    [_A]: _SB,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_SendBounceCommand");
var se_SendBulkTemplatedEmailCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_SendBulkTemplatedEmailRequest(input, context),
    [_A]: _SBTE,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_SendBulkTemplatedEmailCommand");
var se_SendCustomVerificationEmailCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_SendCustomVerificationEmailRequest(input, context),
    [_A]: _SCVE,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_SendCustomVerificationEmailCommand");
var se_SendEmailCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_SendEmailRequest(input, context),
    [_A]: _SE,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_SendEmailCommand");
var se_SendRawEmailCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_SendRawEmailRequest(input, context),
    [_A]: _SRE,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_SendRawEmailCommand");
var se_SendTemplatedEmailCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_SendTemplatedEmailRequest(input, context),
    [_A]: _STE,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_SendTemplatedEmailCommand");
var se_SetActiveReceiptRuleSetCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_SetActiveReceiptRuleSetRequest(input, context),
    [_A]: _SARRS,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_SetActiveReceiptRuleSetCommand");
var se_SetIdentityDkimEnabledCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_SetIdentityDkimEnabledRequest(input, context),
    [_A]: _SIDE,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_SetIdentityDkimEnabledCommand");
var se_SetIdentityFeedbackForwardingEnabledCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_SetIdentityFeedbackForwardingEnabledRequest(input, context),
    [_A]: _SIFFE,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_SetIdentityFeedbackForwardingEnabledCommand");
var se_SetIdentityHeadersInNotificationsEnabledCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_SetIdentityHeadersInNotificationsEnabledRequest(input, context),
    [_A]: _SIHINE,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_SetIdentityHeadersInNotificationsEnabledCommand");
var se_SetIdentityMailFromDomainCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_SetIdentityMailFromDomainRequest(input, context),
    [_A]: _SIMFD,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_SetIdentityMailFromDomainCommand");
var se_SetIdentityNotificationTopicCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_SetIdentityNotificationTopicRequest(input, context),
    [_A]: _SINT,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_SetIdentityNotificationTopicCommand");
var se_SetReceiptRulePositionCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_SetReceiptRulePositionRequest(input, context),
    [_A]: _SRRP,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_SetReceiptRulePositionCommand");
var se_TestRenderTemplateCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_TestRenderTemplateRequest(input, context),
    [_A]: _TRT,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_TestRenderTemplateCommand");
var se_UpdateAccountSendingEnabledCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_UpdateAccountSendingEnabledRequest(input, context),
    [_A]: _UASE,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_UpdateAccountSendingEnabledCommand");
var se_UpdateConfigurationSetEventDestinationCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_UpdateConfigurationSetEventDestinationRequest(input, context),
    [_A]: _UCSED,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_UpdateConfigurationSetEventDestinationCommand");
var se_UpdateConfigurationSetReputationMetricsEnabledCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_UpdateConfigurationSetReputationMetricsEnabledRequest(input, context),
    [_A]: _UCSRME,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_UpdateConfigurationSetReputationMetricsEnabledCommand");
var se_UpdateConfigurationSetSendingEnabledCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_UpdateConfigurationSetSendingEnabledRequest(input, context),
    [_A]: _UCSSE,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_UpdateConfigurationSetSendingEnabledCommand");
var se_UpdateConfigurationSetTrackingOptionsCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_UpdateConfigurationSetTrackingOptionsRequest(input, context),
    [_A]: _UCSTO,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_UpdateConfigurationSetTrackingOptionsCommand");
var se_UpdateCustomVerificationEmailTemplateCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_UpdateCustomVerificationEmailTemplateRequest(input, context),
    [_A]: _UCVET,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_UpdateCustomVerificationEmailTemplateCommand");
var se_UpdateReceiptRuleCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_UpdateReceiptRuleRequest(input, context),
    [_A]: _URR,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_UpdateReceiptRuleCommand");
var se_UpdateTemplateCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_UpdateTemplateRequest(input, context),
    [_A]: _UT,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_UpdateTemplateCommand");
var se_VerifyDomainDkimCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_VerifyDomainDkimRequest(input, context),
    [_A]: _VDD,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_VerifyDomainDkimCommand");
var se_VerifyDomainIdentityCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_VerifyDomainIdentityRequest(input, context),
    [_A]: _VDI,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_VerifyDomainIdentityCommand");
var se_VerifyEmailAddressCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_VerifyEmailAddressRequest(input, context),
    [_A]: _VEA,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_VerifyEmailAddressCommand");
var se_VerifyEmailIdentityCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_VerifyEmailIdentityRequest(input, context),
    [_A]: _VEI,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_VerifyEmailIdentityCommand");
var de_CloneReceiptRuleSetCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_CloneReceiptRuleSetResponse(data.CloneReceiptRuleSetResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_CloneReceiptRuleSetCommand");
var de_CreateConfigurationSetCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_CreateConfigurationSetResponse(data.CreateConfigurationSetResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_CreateConfigurationSetCommand");
var de_CreateConfigurationSetEventDestinationCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_CreateConfigurationSetEventDestinationResponse(
    data.CreateConfigurationSetEventDestinationResult,
    context
  );
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_CreateConfigurationSetEventDestinationCommand");
var de_CreateConfigurationSetTrackingOptionsCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_CreateConfigurationSetTrackingOptionsResponse(
    data.CreateConfigurationSetTrackingOptionsResult,
    context
  );
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_CreateConfigurationSetTrackingOptionsCommand");
var de_CreateCustomVerificationEmailTemplateCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await (0, import_smithy_client.collectBody)(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output)
  };
  return response;
}, "de_CreateCustomVerificationEmailTemplateCommand");
var de_CreateReceiptFilterCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_CreateReceiptFilterResponse(data.CreateReceiptFilterResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_CreateReceiptFilterCommand");
var de_CreateReceiptRuleCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_CreateReceiptRuleResponse(data.CreateReceiptRuleResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_CreateReceiptRuleCommand");
var de_CreateReceiptRuleSetCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_CreateReceiptRuleSetResponse(data.CreateReceiptRuleSetResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_CreateReceiptRuleSetCommand");
var de_CreateTemplateCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_CreateTemplateResponse(data.CreateTemplateResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_CreateTemplateCommand");
var de_DeleteConfigurationSetCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_DeleteConfigurationSetResponse(data.DeleteConfigurationSetResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_DeleteConfigurationSetCommand");
var de_DeleteConfigurationSetEventDestinationCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_DeleteConfigurationSetEventDestinationResponse(
    data.DeleteConfigurationSetEventDestinationResult,
    context
  );
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_DeleteConfigurationSetEventDestinationCommand");
var de_DeleteConfigurationSetTrackingOptionsCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_DeleteConfigurationSetTrackingOptionsResponse(
    data.DeleteConfigurationSetTrackingOptionsResult,
    context
  );
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_DeleteConfigurationSetTrackingOptionsCommand");
var de_DeleteCustomVerificationEmailTemplateCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await (0, import_smithy_client.collectBody)(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output)
  };
  return response;
}, "de_DeleteCustomVerificationEmailTemplateCommand");
var de_DeleteIdentityCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_DeleteIdentityResponse(data.DeleteIdentityResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_DeleteIdentityCommand");
var de_DeleteIdentityPolicyCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_DeleteIdentityPolicyResponse(data.DeleteIdentityPolicyResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_DeleteIdentityPolicyCommand");
var de_DeleteReceiptFilterCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_DeleteReceiptFilterResponse(data.DeleteReceiptFilterResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_DeleteReceiptFilterCommand");
var de_DeleteReceiptRuleCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_DeleteReceiptRuleResponse(data.DeleteReceiptRuleResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_DeleteReceiptRuleCommand");
var de_DeleteReceiptRuleSetCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_DeleteReceiptRuleSetResponse(data.DeleteReceiptRuleSetResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_DeleteReceiptRuleSetCommand");
var de_DeleteTemplateCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_DeleteTemplateResponse(data.DeleteTemplateResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_DeleteTemplateCommand");
var de_DeleteVerifiedEmailAddressCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await (0, import_smithy_client.collectBody)(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output)
  };
  return response;
}, "de_DeleteVerifiedEmailAddressCommand");
var de_DescribeActiveReceiptRuleSetCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_DescribeActiveReceiptRuleSetResponse(data.DescribeActiveReceiptRuleSetResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_DescribeActiveReceiptRuleSetCommand");
var de_DescribeConfigurationSetCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_DescribeConfigurationSetResponse(data.DescribeConfigurationSetResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_DescribeConfigurationSetCommand");
var de_DescribeReceiptRuleCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_DescribeReceiptRuleResponse(data.DescribeReceiptRuleResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_DescribeReceiptRuleCommand");
var de_DescribeReceiptRuleSetCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_DescribeReceiptRuleSetResponse(data.DescribeReceiptRuleSetResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_DescribeReceiptRuleSetCommand");
var de_GetAccountSendingEnabledCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_GetAccountSendingEnabledResponse(data.GetAccountSendingEnabledResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_GetAccountSendingEnabledCommand");
var de_GetCustomVerificationEmailTemplateCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_GetCustomVerificationEmailTemplateResponse(data.GetCustomVerificationEmailTemplateResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_GetCustomVerificationEmailTemplateCommand");
var de_GetIdentityDkimAttributesCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_GetIdentityDkimAttributesResponse(data.GetIdentityDkimAttributesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_GetIdentityDkimAttributesCommand");
var de_GetIdentityMailFromDomainAttributesCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_GetIdentityMailFromDomainAttributesResponse(data.GetIdentityMailFromDomainAttributesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_GetIdentityMailFromDomainAttributesCommand");
var de_GetIdentityNotificationAttributesCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_GetIdentityNotificationAttributesResponse(data.GetIdentityNotificationAttributesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_GetIdentityNotificationAttributesCommand");
var de_GetIdentityPoliciesCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_GetIdentityPoliciesResponse(data.GetIdentityPoliciesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_GetIdentityPoliciesCommand");
var de_GetIdentityVerificationAttributesCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_GetIdentityVerificationAttributesResponse(data.GetIdentityVerificationAttributesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_GetIdentityVerificationAttributesCommand");
var de_GetSendQuotaCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_GetSendQuotaResponse(data.GetSendQuotaResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_GetSendQuotaCommand");
var de_GetSendStatisticsCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_GetSendStatisticsResponse(data.GetSendStatisticsResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_GetSendStatisticsCommand");
var de_GetTemplateCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_GetTemplateResponse(data.GetTemplateResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_GetTemplateCommand");
var de_ListConfigurationSetsCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_ListConfigurationSetsResponse(data.ListConfigurationSetsResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_ListConfigurationSetsCommand");
var de_ListCustomVerificationEmailTemplatesCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_ListCustomVerificationEmailTemplatesResponse(data.ListCustomVerificationEmailTemplatesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_ListCustomVerificationEmailTemplatesCommand");
var de_ListIdentitiesCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_ListIdentitiesResponse(data.ListIdentitiesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_ListIdentitiesCommand");
var de_ListIdentityPoliciesCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_ListIdentityPoliciesResponse(data.ListIdentityPoliciesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_ListIdentityPoliciesCommand");
var de_ListReceiptFiltersCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_ListReceiptFiltersResponse(data.ListReceiptFiltersResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_ListReceiptFiltersCommand");
var de_ListReceiptRuleSetsCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_ListReceiptRuleSetsResponse(data.ListReceiptRuleSetsResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_ListReceiptRuleSetsCommand");
var de_ListTemplatesCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_ListTemplatesResponse(data.ListTemplatesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_ListTemplatesCommand");
var de_ListVerifiedEmailAddressesCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_ListVerifiedEmailAddressesResponse(data.ListVerifiedEmailAddressesResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_ListVerifiedEmailAddressesCommand");
var de_PutConfigurationSetDeliveryOptionsCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_PutConfigurationSetDeliveryOptionsResponse(data.PutConfigurationSetDeliveryOptionsResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_PutConfigurationSetDeliveryOptionsCommand");
var de_PutIdentityPolicyCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_PutIdentityPolicyResponse(data.PutIdentityPolicyResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_PutIdentityPolicyCommand");
var de_ReorderReceiptRuleSetCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_ReorderReceiptRuleSetResponse(data.ReorderReceiptRuleSetResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_ReorderReceiptRuleSetCommand");
var de_SendBounceCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_SendBounceResponse(data.SendBounceResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_SendBounceCommand");
var de_SendBulkTemplatedEmailCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_SendBulkTemplatedEmailResponse(data.SendBulkTemplatedEmailResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_SendBulkTemplatedEmailCommand");
var de_SendCustomVerificationEmailCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_SendCustomVerificationEmailResponse(data.SendCustomVerificationEmailResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_SendCustomVerificationEmailCommand");
var de_SendEmailCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_SendEmailResponse(data.SendEmailResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_SendEmailCommand");
var de_SendRawEmailCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_SendRawEmailResponse(data.SendRawEmailResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_SendRawEmailCommand");
var de_SendTemplatedEmailCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_SendTemplatedEmailResponse(data.SendTemplatedEmailResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_SendTemplatedEmailCommand");
var de_SetActiveReceiptRuleSetCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_SetActiveReceiptRuleSetResponse(data.SetActiveReceiptRuleSetResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_SetActiveReceiptRuleSetCommand");
var de_SetIdentityDkimEnabledCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_SetIdentityDkimEnabledResponse(data.SetIdentityDkimEnabledResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_SetIdentityDkimEnabledCommand");
var de_SetIdentityFeedbackForwardingEnabledCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_SetIdentityFeedbackForwardingEnabledResponse(data.SetIdentityFeedbackForwardingEnabledResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_SetIdentityFeedbackForwardingEnabledCommand");
var de_SetIdentityHeadersInNotificationsEnabledCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_SetIdentityHeadersInNotificationsEnabledResponse(
    data.SetIdentityHeadersInNotificationsEnabledResult,
    context
  );
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_SetIdentityHeadersInNotificationsEnabledCommand");
var de_SetIdentityMailFromDomainCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_SetIdentityMailFromDomainResponse(data.SetIdentityMailFromDomainResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_SetIdentityMailFromDomainCommand");
var de_SetIdentityNotificationTopicCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_SetIdentityNotificationTopicResponse(data.SetIdentityNotificationTopicResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_SetIdentityNotificationTopicCommand");
var de_SetReceiptRulePositionCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_SetReceiptRulePositionResponse(data.SetReceiptRulePositionResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_SetReceiptRulePositionCommand");
var de_TestRenderTemplateCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_TestRenderTemplateResponse(data.TestRenderTemplateResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_TestRenderTemplateCommand");
var de_UpdateAccountSendingEnabledCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await (0, import_smithy_client.collectBody)(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output)
  };
  return response;
}, "de_UpdateAccountSendingEnabledCommand");
var de_UpdateConfigurationSetEventDestinationCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_UpdateConfigurationSetEventDestinationResponse(
    data.UpdateConfigurationSetEventDestinationResult,
    context
  );
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_UpdateConfigurationSetEventDestinationCommand");
var de_UpdateConfigurationSetReputationMetricsEnabledCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await (0, import_smithy_client.collectBody)(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output)
  };
  return response;
}, "de_UpdateConfigurationSetReputationMetricsEnabledCommand");
var de_UpdateConfigurationSetSendingEnabledCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await (0, import_smithy_client.collectBody)(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output)
  };
  return response;
}, "de_UpdateConfigurationSetSendingEnabledCommand");
var de_UpdateConfigurationSetTrackingOptionsCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_UpdateConfigurationSetTrackingOptionsResponse(
    data.UpdateConfigurationSetTrackingOptionsResult,
    context
  );
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_UpdateConfigurationSetTrackingOptionsCommand");
var de_UpdateCustomVerificationEmailTemplateCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await (0, import_smithy_client.collectBody)(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output)
  };
  return response;
}, "de_UpdateCustomVerificationEmailTemplateCommand");
var de_UpdateReceiptRuleCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_UpdateReceiptRuleResponse(data.UpdateReceiptRuleResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_UpdateReceiptRuleCommand");
var de_UpdateTemplateCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_UpdateTemplateResponse(data.UpdateTemplateResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_UpdateTemplateCommand");
var de_VerifyDomainDkimCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_VerifyDomainDkimResponse(data.VerifyDomainDkimResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_VerifyDomainDkimCommand");
var de_VerifyDomainIdentityCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_VerifyDomainIdentityResponse(data.VerifyDomainIdentityResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_VerifyDomainIdentityCommand");
var de_VerifyEmailAddressCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await (0, import_smithy_client.collectBody)(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output)
  };
  return response;
}, "de_VerifyEmailAddressCommand");
var de_VerifyEmailIdentityCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await (0, import_core2.parseXmlBody)(output.body, context);
  let contents = {};
  contents = de_VerifyEmailIdentityResponse(data.VerifyEmailIdentityResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_VerifyEmailIdentityCommand");
var de_CommandError = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await (0, import_core2.parseXmlErrorBody)(output.body, context)
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExists":
    case "com.amazonaws.ses#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.ses#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RuleSetDoesNotExist":
    case "com.amazonaws.ses#RuleSetDoesNotExistException":
      throw await de_RuleSetDoesNotExistExceptionRes(parsedOutput, context);
    case "ConfigurationSetAlreadyExists":
    case "com.amazonaws.ses#ConfigurationSetAlreadyExistsException":
      throw await de_ConfigurationSetAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidConfigurationSet":
    case "com.amazonaws.ses#InvalidConfigurationSetException":
      throw await de_InvalidConfigurationSetExceptionRes(parsedOutput, context);
    case "ConfigurationSetDoesNotExist":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
    case "EventDestinationAlreadyExists":
    case "com.amazonaws.ses#EventDestinationAlreadyExistsException":
      throw await de_EventDestinationAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidCloudWatchDestination":
    case "com.amazonaws.ses#InvalidCloudWatchDestinationException":
      throw await de_InvalidCloudWatchDestinationExceptionRes(parsedOutput, context);
    case "InvalidFirehoseDestination":
    case "com.amazonaws.ses#InvalidFirehoseDestinationException":
      throw await de_InvalidFirehoseDestinationExceptionRes(parsedOutput, context);
    case "InvalidSNSDestination":
    case "com.amazonaws.ses#InvalidSNSDestinationException":
      throw await de_InvalidSNSDestinationExceptionRes(parsedOutput, context);
    case "InvalidTrackingOptions":
    case "com.amazonaws.ses#InvalidTrackingOptionsException":
      throw await de_InvalidTrackingOptionsExceptionRes(parsedOutput, context);
    case "TrackingOptionsAlreadyExistsException":
    case "com.amazonaws.ses#TrackingOptionsAlreadyExistsException":
      throw await de_TrackingOptionsAlreadyExistsExceptionRes(parsedOutput, context);
    case "CustomVerificationEmailInvalidContent":
    case "com.amazonaws.ses#CustomVerificationEmailInvalidContentException":
      throw await de_CustomVerificationEmailInvalidContentExceptionRes(parsedOutput, context);
    case "CustomVerificationEmailTemplateAlreadyExists":
    case "com.amazonaws.ses#CustomVerificationEmailTemplateAlreadyExistsException":
      throw await de_CustomVerificationEmailTemplateAlreadyExistsExceptionRes(parsedOutput, context);
    case "FromEmailAddressNotVerified":
    case "com.amazonaws.ses#FromEmailAddressNotVerifiedException":
      throw await de_FromEmailAddressNotVerifiedExceptionRes(parsedOutput, context);
    case "InvalidLambdaFunction":
    case "com.amazonaws.ses#InvalidLambdaFunctionException":
      throw await de_InvalidLambdaFunctionExceptionRes(parsedOutput, context);
    case "InvalidS3Configuration":
    case "com.amazonaws.ses#InvalidS3ConfigurationException":
      throw await de_InvalidS3ConfigurationExceptionRes(parsedOutput, context);
    case "InvalidSnsTopic":
    case "com.amazonaws.ses#InvalidSnsTopicException":
      throw await de_InvalidSnsTopicExceptionRes(parsedOutput, context);
    case "RuleDoesNotExist":
    case "com.amazonaws.ses#RuleDoesNotExistException":
      throw await de_RuleDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidTemplate":
    case "com.amazonaws.ses#InvalidTemplateException":
      throw await de_InvalidTemplateExceptionRes(parsedOutput, context);
    case "EventDestinationDoesNotExist":
    case "com.amazonaws.ses#EventDestinationDoesNotExistException":
      throw await de_EventDestinationDoesNotExistExceptionRes(parsedOutput, context);
    case "TrackingOptionsDoesNotExistException":
    case "com.amazonaws.ses#TrackingOptionsDoesNotExistException":
      throw await de_TrackingOptionsDoesNotExistExceptionRes(parsedOutput, context);
    case "CannotDelete":
    case "com.amazonaws.ses#CannotDeleteException":
      throw await de_CannotDeleteExceptionRes(parsedOutput, context);
    case "CustomVerificationEmailTemplateDoesNotExist":
    case "com.amazonaws.ses#CustomVerificationEmailTemplateDoesNotExistException":
      throw await de_CustomVerificationEmailTemplateDoesNotExistExceptionRes(parsedOutput, context);
    case "TemplateDoesNotExist":
    case "com.amazonaws.ses#TemplateDoesNotExistException":
      throw await de_TemplateDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidDeliveryOptions":
    case "com.amazonaws.ses#InvalidDeliveryOptionsException":
      throw await de_InvalidDeliveryOptionsExceptionRes(parsedOutput, context);
    case "InvalidPolicy":
    case "com.amazonaws.ses#InvalidPolicyException":
      throw await de_InvalidPolicyExceptionRes(parsedOutput, context);
    case "MessageRejected":
    case "com.amazonaws.ses#MessageRejected":
      throw await de_MessageRejectedRes(parsedOutput, context);
    case "AccountSendingPausedException":
    case "com.amazonaws.ses#AccountSendingPausedException":
      throw await de_AccountSendingPausedExceptionRes(parsedOutput, context);
    case "ConfigurationSetSendingPausedException":
    case "com.amazonaws.ses#ConfigurationSetSendingPausedException":
      throw await de_ConfigurationSetSendingPausedExceptionRes(parsedOutput, context);
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.ses#MailFromDomainNotVerifiedException":
      throw await de_MailFromDomainNotVerifiedExceptionRes(parsedOutput, context);
    case "ProductionAccessNotGranted":
    case "com.amazonaws.ses#ProductionAccessNotGrantedException":
      throw await de_ProductionAccessNotGrantedExceptionRes(parsedOutput, context);
    case "InvalidRenderingParameter":
    case "com.amazonaws.ses#InvalidRenderingParameterException":
      throw await de_InvalidRenderingParameterExceptionRes(parsedOutput, context);
    case "MissingRenderingAttribute":
    case "com.amazonaws.ses#MissingRenderingAttributeException":
      throw await de_MissingRenderingAttributeExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode
      });
  }
}, "de_CommandError");
var de_AccountSendingPausedExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_AccountSendingPausedException(body.Error, context);
  const exception = new AccountSendingPausedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_AccountSendingPausedExceptionRes");
var de_AlreadyExistsExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_AlreadyExistsException(body.Error, context);
  const exception = new AlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_AlreadyExistsExceptionRes");
var de_CannotDeleteExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_CannotDeleteException(body.Error, context);
  const exception = new CannotDeleteException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_CannotDeleteExceptionRes");
var de_ConfigurationSetAlreadyExistsExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_ConfigurationSetAlreadyExistsException(body.Error, context);
  const exception = new ConfigurationSetAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_ConfigurationSetAlreadyExistsExceptionRes");
var de_ConfigurationSetDoesNotExistExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_ConfigurationSetDoesNotExistException(body.Error, context);
  const exception = new ConfigurationSetDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_ConfigurationSetDoesNotExistExceptionRes");
var de_ConfigurationSetSendingPausedExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_ConfigurationSetSendingPausedException(body.Error, context);
  const exception = new ConfigurationSetSendingPausedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_ConfigurationSetSendingPausedExceptionRes");
var de_CustomVerificationEmailInvalidContentExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_CustomVerificationEmailInvalidContentException(body.Error, context);
  const exception = new CustomVerificationEmailInvalidContentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_CustomVerificationEmailInvalidContentExceptionRes");
var de_CustomVerificationEmailTemplateAlreadyExistsExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_CustomVerificationEmailTemplateAlreadyExistsException(body.Error, context);
  const exception = new CustomVerificationEmailTemplateAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_CustomVerificationEmailTemplateAlreadyExistsExceptionRes");
var de_CustomVerificationEmailTemplateDoesNotExistExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_CustomVerificationEmailTemplateDoesNotExistException(body.Error, context);
  const exception = new CustomVerificationEmailTemplateDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_CustomVerificationEmailTemplateDoesNotExistExceptionRes");
var de_EventDestinationAlreadyExistsExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_EventDestinationAlreadyExistsException(body.Error, context);
  const exception = new EventDestinationAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_EventDestinationAlreadyExistsExceptionRes");
var de_EventDestinationDoesNotExistExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_EventDestinationDoesNotExistException(body.Error, context);
  const exception = new EventDestinationDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_EventDestinationDoesNotExistExceptionRes");
var de_FromEmailAddressNotVerifiedExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_FromEmailAddressNotVerifiedException(body.Error, context);
  const exception = new FromEmailAddressNotVerifiedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_FromEmailAddressNotVerifiedExceptionRes");
var de_InvalidCloudWatchDestinationExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_InvalidCloudWatchDestinationException(body.Error, context);
  const exception = new InvalidCloudWatchDestinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_InvalidCloudWatchDestinationExceptionRes");
var de_InvalidConfigurationSetExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_InvalidConfigurationSetException(body.Error, context);
  const exception = new InvalidConfigurationSetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_InvalidConfigurationSetExceptionRes");
var de_InvalidDeliveryOptionsExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_InvalidDeliveryOptionsException(body.Error, context);
  const exception = new InvalidDeliveryOptionsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_InvalidDeliveryOptionsExceptionRes");
var de_InvalidFirehoseDestinationExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_InvalidFirehoseDestinationException(body.Error, context);
  const exception = new InvalidFirehoseDestinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_InvalidFirehoseDestinationExceptionRes");
var de_InvalidLambdaFunctionExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_InvalidLambdaFunctionException(body.Error, context);
  const exception = new InvalidLambdaFunctionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_InvalidLambdaFunctionExceptionRes");
var de_InvalidPolicyExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_InvalidPolicyException(body.Error, context);
  const exception = new InvalidPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_InvalidPolicyExceptionRes");
var de_InvalidRenderingParameterExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_InvalidRenderingParameterException(body.Error, context);
  const exception = new InvalidRenderingParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_InvalidRenderingParameterExceptionRes");
var de_InvalidS3ConfigurationExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_InvalidS3ConfigurationException(body.Error, context);
  const exception = new InvalidS3ConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_InvalidS3ConfigurationExceptionRes");
var de_InvalidSNSDestinationExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_InvalidSNSDestinationException(body.Error, context);
  const exception = new InvalidSNSDestinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_InvalidSNSDestinationExceptionRes");
var de_InvalidSnsTopicExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_InvalidSnsTopicException(body.Error, context);
  const exception = new InvalidSnsTopicException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_InvalidSnsTopicExceptionRes");
var de_InvalidTemplateExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_InvalidTemplateException(body.Error, context);
  const exception = new InvalidTemplateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_InvalidTemplateExceptionRes");
var de_InvalidTrackingOptionsExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_InvalidTrackingOptionsException(body.Error, context);
  const exception = new InvalidTrackingOptionsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_InvalidTrackingOptionsExceptionRes");
var de_LimitExceededExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_LimitExceededException(body.Error, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_LimitExceededExceptionRes");
var de_MailFromDomainNotVerifiedExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_MailFromDomainNotVerifiedException(body.Error, context);
  const exception = new MailFromDomainNotVerifiedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_MailFromDomainNotVerifiedExceptionRes");
var de_MessageRejectedRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_MessageRejected(body.Error, context);
  const exception = new MessageRejected({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_MessageRejectedRes");
var de_MissingRenderingAttributeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_MissingRenderingAttributeException(body.Error, context);
  const exception = new MissingRenderingAttributeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_MissingRenderingAttributeExceptionRes");
var de_ProductionAccessNotGrantedExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_ProductionAccessNotGrantedException(body.Error, context);
  const exception = new ProductionAccessNotGrantedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_ProductionAccessNotGrantedExceptionRes");
var de_RuleDoesNotExistExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_RuleDoesNotExistException(body.Error, context);
  const exception = new RuleDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_RuleDoesNotExistExceptionRes");
var de_RuleSetDoesNotExistExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_RuleSetDoesNotExistException(body.Error, context);
  const exception = new RuleSetDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_RuleSetDoesNotExistExceptionRes");
var de_TemplateDoesNotExistExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_TemplateDoesNotExistException(body.Error, context);
  const exception = new TemplateDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_TemplateDoesNotExistExceptionRes");
var de_TrackingOptionsAlreadyExistsExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_TrackingOptionsAlreadyExistsException(body.Error, context);
  const exception = new TrackingOptionsAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_TrackingOptionsAlreadyExistsExceptionRes");
var de_TrackingOptionsDoesNotExistExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_TrackingOptionsDoesNotExistException(body.Error, context);
  const exception = new TrackingOptionsDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_TrackingOptionsDoesNotExistExceptionRes");
var se_AddHeaderAction = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_HN] != null) {
    entries[_HN] = input[_HN];
  }
  if (input[_HV] != null) {
    entries[_HV] = input[_HV];
  }
  return entries;
}, "se_AddHeaderAction");
var se_AddressList = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
}, "se_AddressList");
var se_Body = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_T] != null) {
    const memberEntries = se_Content(input[_T], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Text.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_H] != null) {
    const memberEntries = se_Content(input[_H], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Html.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_Body");
var se_BounceAction = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_SRC] != null) {
    entries[_SRC] = input[_SRC];
  }
  if (input[_SC] != null) {
    entries[_SC] = input[_SC];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_S] != null) {
    entries[_S] = input[_S];
  }
  return entries;
}, "se_BounceAction");
var se_BouncedRecipientInfo = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_R] != null) {
    entries[_R] = input[_R];
  }
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  if (input[_BT] != null) {
    entries[_BT] = input[_BT];
  }
  if (input[_RDF] != null) {
    const memberEntries = se_RecipientDsnFields(input[_RDF], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RecipientDsnFields.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_BouncedRecipientInfo");
var se_BouncedRecipientInfoList = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_BouncedRecipientInfo(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
}, "se_BouncedRecipientInfoList");
var se_BulkEmailDestination = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_D] != null) {
    const memberEntries = se_Destination(input[_D], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Destination.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RT] != null) {
    const memberEntries = se_MessageTagList(input[_RT], context);
    if (input[_RT]?.length === 0) {
      entries.ReplacementTags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplacementTags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RTD] != null) {
    entries[_RTD] = input[_RTD];
  }
  return entries;
}, "se_BulkEmailDestination");
var se_BulkEmailDestinationList = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_BulkEmailDestination(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
}, "se_BulkEmailDestinationList");
var se_CloneReceiptRuleSetRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  if (input[_ORSN] != null) {
    entries[_ORSN] = input[_ORSN];
  }
  return entries;
}, "se_CloneReceiptRuleSetRequest");
var se_CloudWatchDestination = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_DC] != null) {
    const memberEntries = se_CloudWatchDimensionConfigurations(input[_DC], context);
    if (input[_DC]?.length === 0) {
      entries.DimensionConfigurations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DimensionConfigurations.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_CloudWatchDestination");
var se_CloudWatchDimensionConfiguration = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_DVS] != null) {
    entries[_DVS] = input[_DVS];
  }
  if (input[_DDV] != null) {
    entries[_DDV] = input[_DDV];
  }
  return entries;
}, "se_CloudWatchDimensionConfiguration");
var se_CloudWatchDimensionConfigurations = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_CloudWatchDimensionConfiguration(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
}, "se_CloudWatchDimensionConfigurations");
var se_ConfigurationSet = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  return entries;
}, "se_ConfigurationSet");
var se_ConfigurationSetAttributeList = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
}, "se_ConfigurationSetAttributeList");
var se_ConnectAction = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_IARN] != null) {
    entries[_IARN] = input[_IARN];
  }
  if (input[_IAMRARN] != null) {
    entries[_IAMRARN] = input[_IAMRARN];
  }
  return entries;
}, "se_ConnectAction");
var se_Content = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_Da] != null) {
    entries[_Da] = input[_Da];
  }
  if (input[_C] != null) {
    entries[_C] = input[_C];
  }
  return entries;
}, "se_Content");
var se_CreateConfigurationSetEventDestinationRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_ED] != null) {
    const memberEntries = se_EventDestination(input[_ED], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EventDestination.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_CreateConfigurationSetEventDestinationRequest");
var se_CreateConfigurationSetRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_CS] != null) {
    const memberEntries = se_ConfigurationSet(input[_CS], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ConfigurationSet.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_CreateConfigurationSetRequest");
var se_CreateConfigurationSetTrackingOptionsRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_TO] != null) {
    const memberEntries = se_TrackingOptions(input[_TO], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TrackingOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_CreateConfigurationSetTrackingOptionsRequest");
var se_CreateCustomVerificationEmailTemplateRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_FEA] != null) {
    entries[_FEA] = input[_FEA];
  }
  if (input[_TS] != null) {
    entries[_TS] = input[_TS];
  }
  if (input[_TC] != null) {
    entries[_TC] = input[_TC];
  }
  if (input[_SRURL] != null) {
    entries[_SRURL] = input[_SRURL];
  }
  if (input[_FRURL] != null) {
    entries[_FRURL] = input[_FRURL];
  }
  return entries;
}, "se_CreateCustomVerificationEmailTemplateRequest");
var se_CreateReceiptFilterRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_F] != null) {
    const memberEntries = se_ReceiptFilter(input[_F], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filter.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_CreateReceiptFilterRequest");
var se_CreateReceiptRuleRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  if (input[_Af] != null) {
    entries[_Af] = input[_Af];
  }
  if (input[_Ru] != null) {
    const memberEntries = se_ReceiptRule(input[_Ru], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Rule.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_CreateReceiptRuleRequest");
var se_CreateReceiptRuleSetRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  return entries;
}, "se_CreateReceiptRuleSetRequest");
var se_CreateTemplateRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_Te] != null) {
    const memberEntries = se_Template(input[_Te], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Template.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_CreateTemplateRequest");
var se_DeleteConfigurationSetEventDestinationRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_EDN] != null) {
    entries[_EDN] = input[_EDN];
  }
  return entries;
}, "se_DeleteConfigurationSetEventDestinationRequest");
var se_DeleteConfigurationSetRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  return entries;
}, "se_DeleteConfigurationSetRequest");
var se_DeleteConfigurationSetTrackingOptionsRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  return entries;
}, "se_DeleteConfigurationSetTrackingOptionsRequest");
var se_DeleteCustomVerificationEmailTemplateRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  return entries;
}, "se_DeleteCustomVerificationEmailTemplateRequest");
var se_DeleteIdentityPolicyRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  return entries;
}, "se_DeleteIdentityPolicyRequest");
var se_DeleteIdentityRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  return entries;
}, "se_DeleteIdentityRequest");
var se_DeleteReceiptFilterRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_FN] != null) {
    entries[_FN] = input[_FN];
  }
  return entries;
}, "se_DeleteReceiptFilterRequest");
var se_DeleteReceiptRuleRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  return entries;
}, "se_DeleteReceiptRuleRequest");
var se_DeleteReceiptRuleSetRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  return entries;
}, "se_DeleteReceiptRuleSetRequest");
var se_DeleteTemplateRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  return entries;
}, "se_DeleteTemplateRequest");
var se_DeleteVerifiedEmailAddressRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_EA] != null) {
    entries[_EA] = input[_EA];
  }
  return entries;
}, "se_DeleteVerifiedEmailAddressRequest");
var se_DeliveryOptions = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_TP] != null) {
    entries[_TP] = input[_TP];
  }
  return entries;
}, "se_DeliveryOptions");
var se_DescribeActiveReceiptRuleSetRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  return entries;
}, "se_DescribeActiveReceiptRuleSetRequest");
var se_DescribeConfigurationSetRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_CSAN] != null) {
    const memberEntries = se_ConfigurationSetAttributeList(input[_CSAN], context);
    if (input[_CSAN]?.length === 0) {
      entries.ConfigurationSetAttributeNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ConfigurationSetAttributeNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_DescribeConfigurationSetRequest");
var se_DescribeReceiptRuleRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  return entries;
}, "se_DescribeReceiptRuleRequest");
var se_DescribeReceiptRuleSetRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  return entries;
}, "se_DescribeReceiptRuleSetRequest");
var se_Destination = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_TAo] != null) {
    const memberEntries = se_AddressList(input[_TAo], context);
    if (input[_TAo]?.length === 0) {
      entries.ToAddresses = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ToAddresses.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CA] != null) {
    const memberEntries = se_AddressList(input[_CA], context);
    if (input[_CA]?.length === 0) {
      entries.CcAddresses = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CcAddresses.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_BA] != null) {
    const memberEntries = se_AddressList(input[_BA], context);
    if (input[_BA]?.length === 0) {
      entries.BccAddresses = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BccAddresses.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_Destination");
var se_EventDestination = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_MET] != null) {
    const memberEntries = se_EventTypes(input[_MET], context);
    if (input[_MET]?.length === 0) {
      entries.MatchingEventTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MatchingEventTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_KFD] != null) {
    const memberEntries = se_KinesisFirehoseDestination(input[_KFD], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `KinesisFirehoseDestination.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CWD] != null) {
    const memberEntries = se_CloudWatchDestination(input[_CWD], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CloudWatchDestination.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SNSD] != null) {
    const memberEntries = se_SNSDestination(input[_SNSD], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SNSDestination.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_EventDestination");
var se_EventTypes = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
}, "se_EventTypes");
var se_ExtensionField = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_Va] != null) {
    entries[_Va] = input[_Va];
  }
  return entries;
}, "se_ExtensionField");
var se_ExtensionFieldList = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_ExtensionField(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
}, "se_ExtensionFieldList");
var se_GetCustomVerificationEmailTemplateRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  return entries;
}, "se_GetCustomVerificationEmailTemplateRequest");
var se_GetIdentityDkimAttributesRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_Id] != null) {
    const memberEntries = se_IdentityList(input[_Id], context);
    if (input[_Id]?.length === 0) {
      entries.Identities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Identities.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_GetIdentityDkimAttributesRequest");
var se_GetIdentityMailFromDomainAttributesRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_Id] != null) {
    const memberEntries = se_IdentityList(input[_Id], context);
    if (input[_Id]?.length === 0) {
      entries.Identities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Identities.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_GetIdentityMailFromDomainAttributesRequest");
var se_GetIdentityNotificationAttributesRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_Id] != null) {
    const memberEntries = se_IdentityList(input[_Id], context);
    if (input[_Id]?.length === 0) {
      entries.Identities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Identities.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_GetIdentityNotificationAttributesRequest");
var se_GetIdentityPoliciesRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_PNo] != null) {
    const memberEntries = se_PolicyNameList(input[_PNo], context);
    if (input[_PNo]?.length === 0) {
      entries.PolicyNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_GetIdentityPoliciesRequest");
var se_GetIdentityVerificationAttributesRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_Id] != null) {
    const memberEntries = se_IdentityList(input[_Id], context);
    if (input[_Id]?.length === 0) {
      entries.Identities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Identities.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_GetIdentityVerificationAttributesRequest");
var se_GetTemplateRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  return entries;
}, "se_GetTemplateRequest");
var se_IdentityList = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
}, "se_IdentityList");
var se_KinesisFirehoseDestination = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_IAMRARN] != null) {
    entries[_IAMRARN] = input[_IAMRARN];
  }
  if (input[_DSARN] != null) {
    entries[_DSARN] = input[_DSARN];
  }
  return entries;
}, "se_KinesisFirehoseDestination");
var se_LambdaAction = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_FA] != null) {
    entries[_FA] = input[_FA];
  }
  if (input[_IT] != null) {
    entries[_IT] = input[_IT];
  }
  return entries;
}, "se_LambdaAction");
var se_ListConfigurationSetsRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
}, "se_ListConfigurationSetsRequest");
var se_ListCustomVerificationEmailTemplatesRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
}, "se_ListCustomVerificationEmailTemplatesRequest");
var se_ListIdentitiesRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_ITd] != null) {
    entries[_ITd] = input[_ITd];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
}, "se_ListIdentitiesRequest");
var se_ListIdentityPoliciesRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  return entries;
}, "se_ListIdentityPoliciesRequest");
var se_ListReceiptFiltersRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  return entries;
}, "se_ListReceiptFiltersRequest");
var se_ListReceiptRuleSetsRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
}, "se_ListReceiptRuleSetsRequest");
var se_ListTemplatesRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
}, "se_ListTemplatesRequest");
var se_Message = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_Su] != null) {
    const memberEntries = se_Content(input[_Su], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Subject.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_B] != null) {
    const memberEntries = se_Body(input[_B], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Body.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_Message");
var se_MessageDsn = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_RM] != null) {
    entries[_RM] = input[_RM];
  }
  if (input[_AD] != null) {
    entries[_AD] = (0, import_smithy_client.serializeDateTime)(input[_AD]);
  }
  if (input[_EF] != null) {
    const memberEntries = se_ExtensionFieldList(input[_EF], context);
    if (input[_EF]?.length === 0) {
      entries.ExtensionFields = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExtensionFields.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_MessageDsn");
var se_MessageTag = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_Va] != null) {
    entries[_Va] = input[_Va];
  }
  return entries;
}, "se_MessageTag");
var se_MessageTagList = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_MessageTag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
}, "se_MessageTagList");
var se_PolicyNameList = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
}, "se_PolicyNameList");
var se_PutConfigurationSetDeliveryOptionsRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_DO] != null) {
    const memberEntries = se_DeliveryOptions(input[_DO], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeliveryOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_PutConfigurationSetDeliveryOptionsRequest");
var se_PutIdentityPolicyRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  return entries;
}, "se_PutIdentityPolicyRequest");
var se_RawMessage = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_Da] != null) {
    entries[_Da] = context.base64Encoder(input[_Da]);
  }
  return entries;
}, "se_RawMessage");
var se_ReceiptAction = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_SA] != null) {
    const memberEntries = se_S3Action(input[_SA], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `S3Action.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_BAo] != null) {
    const memberEntries = se_BounceAction(input[_BAo], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BounceAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_WA] != null) {
    const memberEntries = se_WorkmailAction(input[_WA], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `WorkmailAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_LA] != null) {
    const memberEntries = se_LambdaAction(input[_LA], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LambdaAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SAt] != null) {
    const memberEntries = se_StopAction(input[_SAt], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StopAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AHA] != null) {
    const memberEntries = se_AddHeaderAction(input[_AHA], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AddHeaderAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SNSA] != null) {
    const memberEntries = se_SNSAction(input[_SNSA], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SNSAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CAo] != null) {
    const memberEntries = se_ConnectAction(input[_CAo], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ConnectAction.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_ReceiptAction");
var se_ReceiptActionsList = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_ReceiptAction(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
}, "se_ReceiptActionsList");
var se_ReceiptFilter = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_IF] != null) {
    const memberEntries = se_ReceiptIpFilter(input[_IF], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IpFilter.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_ReceiptFilter");
var se_ReceiptIpFilter = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_Ci] != null) {
    entries[_Ci] = input[_Ci];
  }
  return entries;
}, "se_ReceiptIpFilter");
var se_ReceiptRule = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_TP] != null) {
    entries[_TP] = input[_TP];
  }
  if (input[_Re] != null) {
    const memberEntries = se_RecipientsList(input[_Re], context);
    if (input[_Re]?.length === 0) {
      entries.Recipients = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Recipients.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ac] != null) {
    const memberEntries = se_ReceiptActionsList(input[_Ac], context);
    if (input[_Ac]?.length === 0) {
      entries.Actions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Actions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SEc] != null) {
    entries[_SEc] = input[_SEc];
  }
  return entries;
}, "se_ReceiptRule");
var se_ReceiptRuleNamesList = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
}, "se_ReceiptRuleNamesList");
var se_RecipientDsnFields = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_FR] != null) {
    entries[_FR] = input[_FR];
  }
  if (input[_A] != null) {
    entries[_A] = input[_A];
  }
  if (input[_RMe] != null) {
    entries[_RMe] = input[_RMe];
  }
  if (input[_St] != null) {
    entries[_St] = input[_St];
  }
  if (input[_DCi] != null) {
    entries[_DCi] = input[_DCi];
  }
  if (input[_LAD] != null) {
    entries[_LAD] = (0, import_smithy_client.serializeDateTime)(input[_LAD]);
  }
  if (input[_EF] != null) {
    const memberEntries = se_ExtensionFieldList(input[_EF], context);
    if (input[_EF]?.length === 0) {
      entries.ExtensionFields = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExtensionFields.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_RecipientDsnFields");
var se_RecipientsList = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
}, "se_RecipientsList");
var se_ReorderReceiptRuleSetRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  if (input[_RNu] != null) {
    const memberEntries = se_ReceiptRuleNamesList(input[_RNu], context);
    if (input[_RNu]?.length === 0) {
      entries.RuleNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RuleNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_ReorderReceiptRuleSetRequest");
var se_S3Action = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_BN] != null) {
    entries[_BN] = input[_BN];
  }
  if (input[_OKP] != null) {
    entries[_OKP] = input[_OKP];
  }
  if (input[_KKA] != null) {
    entries[_KKA] = input[_KKA];
  }
  if (input[_IRA] != null) {
    entries[_IRA] = input[_IRA];
  }
  return entries;
}, "se_S3Action");
var se_SendBounceRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_OMI] != null) {
    entries[_OMI] = input[_OMI];
  }
  if (input[_BS] != null) {
    entries[_BS] = input[_BS];
  }
  if (input[_Ex] != null) {
    entries[_Ex] = input[_Ex];
  }
  if (input[_MD] != null) {
    const memberEntries = se_MessageDsn(input[_MD], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageDsn.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_BRIL] != null) {
    const memberEntries = se_BouncedRecipientInfoList(input[_BRIL], context);
    if (input[_BRIL]?.length === 0) {
      entries.BouncedRecipientInfoList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BouncedRecipientInfoList.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_BSA] != null) {
    entries[_BSA] = input[_BSA];
  }
  return entries;
}, "se_SendBounceRequest");
var se_SendBulkTemplatedEmailRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_So] != null) {
    entries[_So] = input[_So];
  }
  if (input[_SAo] != null) {
    entries[_SAo] = input[_SAo];
  }
  if (input[_RTA] != null) {
    const memberEntries = se_AddressList(input[_RTA], context);
    if (input[_RTA]?.length === 0) {
      entries.ReplyToAddresses = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplyToAddresses.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RP] != null) {
    entries[_RP] = input[_RP];
  }
  if (input[_RPA] != null) {
    entries[_RPA] = input[_RPA];
  }
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_DTe] != null) {
    const memberEntries = se_MessageTagList(input[_DTe], context);
    if (input[_DTe]?.length === 0) {
      entries.DefaultTags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DefaultTags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Te] != null) {
    entries[_Te] = input[_Te];
  }
  if (input[_TAe] != null) {
    entries[_TAe] = input[_TAe];
  }
  if (input[_DTD] != null) {
    entries[_DTD] = input[_DTD];
  }
  if (input[_De] != null) {
    const memberEntries = se_BulkEmailDestinationList(input[_De], context);
    if (input[_De]?.length === 0) {
      entries.Destinations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Destinations.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_SendBulkTemplatedEmailRequest");
var se_SendCustomVerificationEmailRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_EA] != null) {
    entries[_EA] = input[_EA];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  return entries;
}, "se_SendCustomVerificationEmailRequest");
var se_SendEmailRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_So] != null) {
    entries[_So] = input[_So];
  }
  if (input[_D] != null) {
    const memberEntries = se_Destination(input[_D], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Destination.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_M] != null) {
    const memberEntries = se_Message(input[_M], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Message.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RTA] != null) {
    const memberEntries = se_AddressList(input[_RTA], context);
    if (input[_RTA]?.length === 0) {
      entries.ReplyToAddresses = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplyToAddresses.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RP] != null) {
    entries[_RP] = input[_RP];
  }
  if (input[_SAo] != null) {
    entries[_SAo] = input[_SAo];
  }
  if (input[_RPA] != null) {
    entries[_RPA] = input[_RPA];
  }
  if (input[_Ta] != null) {
    const memberEntries = se_MessageTagList(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  return entries;
}, "se_SendEmailRequest");
var se_SendRawEmailRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_So] != null) {
    entries[_So] = input[_So];
  }
  if (input[_De] != null) {
    const memberEntries = se_AddressList(input[_De], context);
    if (input[_De]?.length === 0) {
      entries.Destinations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Destinations.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RMa] != null) {
    const memberEntries = se_RawMessage(input[_RMa], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RawMessage.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_FAr] != null) {
    entries[_FAr] = input[_FAr];
  }
  if (input[_SAo] != null) {
    entries[_SAo] = input[_SAo];
  }
  if (input[_RPA] != null) {
    entries[_RPA] = input[_RPA];
  }
  if (input[_Ta] != null) {
    const memberEntries = se_MessageTagList(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  return entries;
}, "se_SendRawEmailRequest");
var se_SendTemplatedEmailRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_So] != null) {
    entries[_So] = input[_So];
  }
  if (input[_D] != null) {
    const memberEntries = se_Destination(input[_D], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Destination.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RTA] != null) {
    const memberEntries = se_AddressList(input[_RTA], context);
    if (input[_RTA]?.length === 0) {
      entries.ReplyToAddresses = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplyToAddresses.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RP] != null) {
    entries[_RP] = input[_RP];
  }
  if (input[_SAo] != null) {
    entries[_SAo] = input[_SAo];
  }
  if (input[_RPA] != null) {
    entries[_RPA] = input[_RPA];
  }
  if (input[_Ta] != null) {
    const memberEntries = se_MessageTagList(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_Te] != null) {
    entries[_Te] = input[_Te];
  }
  if (input[_TAe] != null) {
    entries[_TAe] = input[_TAe];
  }
  if (input[_TD] != null) {
    entries[_TD] = input[_TD];
  }
  return entries;
}, "se_SendTemplatedEmailRequest");
var se_SetActiveReceiptRuleSetRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  return entries;
}, "se_SetActiveReceiptRuleSetRequest");
var se_SetIdentityDkimEnabledRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_DE] != null) {
    entries[_DE] = input[_DE];
  }
  return entries;
}, "se_SetIdentityDkimEnabledRequest");
var se_SetIdentityFeedbackForwardingEnabledRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_FE] != null) {
    entries[_FE] = input[_FE];
  }
  return entries;
}, "se_SetIdentityFeedbackForwardingEnabledRequest");
var se_SetIdentityHeadersInNotificationsEnabledRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_NTo] != null) {
    entries[_NTo] = input[_NTo];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  return entries;
}, "se_SetIdentityHeadersInNotificationsEnabledRequest");
var se_SetIdentityMailFromDomainRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_MFD] != null) {
    entries[_MFD] = input[_MFD];
  }
  if (input[_BOMXF] != null) {
    entries[_BOMXF] = input[_BOMXF];
  }
  return entries;
}, "se_SetIdentityMailFromDomainRequest");
var se_SetIdentityNotificationTopicRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_NTo] != null) {
    entries[_NTo] = input[_NTo];
  }
  if (input[_ST] != null) {
    entries[_ST] = input[_ST];
  }
  return entries;
}, "se_SetIdentityNotificationTopicRequest");
var se_SetReceiptRulePositionRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_Af] != null) {
    entries[_Af] = input[_Af];
  }
  return entries;
}, "se_SetReceiptRulePositionRequest");
var se_SNSAction = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_En] != null) {
    entries[_En] = input[_En];
  }
  return entries;
}, "se_SNSAction");
var se_SNSDestination = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_TARN] != null) {
    entries[_TARN] = input[_TARN];
  }
  return entries;
}, "se_SNSDestination");
var se_StopAction = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_Sc] != null) {
    entries[_Sc] = input[_Sc];
  }
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  return entries;
}, "se_StopAction");
var se_Template = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_SP] != null) {
    entries[_SP] = input[_SP];
  }
  if (input[_TPe] != null) {
    entries[_TPe] = input[_TPe];
  }
  if (input[_HP] != null) {
    entries[_HP] = input[_HP];
  }
  return entries;
}, "se_Template");
var se_TestRenderTemplateRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_TD] != null) {
    entries[_TD] = input[_TD];
  }
  return entries;
}, "se_TestRenderTemplateRequest");
var se_TrackingOptions = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_CRD] != null) {
    entries[_CRD] = input[_CRD];
  }
  return entries;
}, "se_TrackingOptions");
var se_UpdateAccountSendingEnabledRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  return entries;
}, "se_UpdateAccountSendingEnabledRequest");
var se_UpdateConfigurationSetEventDestinationRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_ED] != null) {
    const memberEntries = se_EventDestination(input[_ED], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EventDestination.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_UpdateConfigurationSetEventDestinationRequest");
var se_UpdateConfigurationSetReputationMetricsEnabledRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  return entries;
}, "se_UpdateConfigurationSetReputationMetricsEnabledRequest");
var se_UpdateConfigurationSetSendingEnabledRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  return entries;
}, "se_UpdateConfigurationSetSendingEnabledRequest");
var se_UpdateConfigurationSetTrackingOptionsRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_TO] != null) {
    const memberEntries = se_TrackingOptions(input[_TO], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TrackingOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_UpdateConfigurationSetTrackingOptionsRequest");
var se_UpdateCustomVerificationEmailTemplateRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_FEA] != null) {
    entries[_FEA] = input[_FEA];
  }
  if (input[_TS] != null) {
    entries[_TS] = input[_TS];
  }
  if (input[_TC] != null) {
    entries[_TC] = input[_TC];
  }
  if (input[_SRURL] != null) {
    entries[_SRURL] = input[_SRURL];
  }
  if (input[_FRURL] != null) {
    entries[_FRURL] = input[_FRURL];
  }
  return entries;
}, "se_UpdateCustomVerificationEmailTemplateRequest");
var se_UpdateReceiptRuleRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  if (input[_Ru] != null) {
    const memberEntries = se_ReceiptRule(input[_Ru], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Rule.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_UpdateReceiptRuleRequest");
var se_UpdateTemplateRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_Te] != null) {
    const memberEntries = se_Template(input[_Te], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Template.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_UpdateTemplateRequest");
var se_VerifyDomainDkimRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_Do] != null) {
    entries[_Do] = input[_Do];
  }
  return entries;
}, "se_VerifyDomainDkimRequest");
var se_VerifyDomainIdentityRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_Do] != null) {
    entries[_Do] = input[_Do];
  }
  return entries;
}, "se_VerifyDomainIdentityRequest");
var se_VerifyEmailAddressRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_EA] != null) {
    entries[_EA] = input[_EA];
  }
  return entries;
}, "se_VerifyEmailAddressRequest");
var se_VerifyEmailIdentityRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_EA] != null) {
    entries[_EA] = input[_EA];
  }
  return entries;
}, "se_VerifyEmailIdentityRequest");
var se_WorkmailAction = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_OA] != null) {
    entries[_OA] = input[_OA];
  }
  return entries;
}, "se_WorkmailAction");
var de_AccountSendingPausedException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_AccountSendingPausedException");
var de_AddHeaderAction = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_HN] != null) {
    contents[_HN] = (0, import_smithy_client.expectString)(output[_HN]);
  }
  if (output[_HV] != null) {
    contents[_HV] = (0, import_smithy_client.expectString)(output[_HV]);
  }
  return contents;
}, "de_AddHeaderAction");
var de_AddressList = /* @__PURE__ */ __name((output, context) => {
  return (output || []).filter((e) => e != null).map((entry) => {
    return (0, import_smithy_client.expectString)(entry);
  });
}, "de_AddressList");
var de_AlreadyExistsException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_N] != null) {
    contents[_N] = (0, import_smithy_client.expectString)(output[_N]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_AlreadyExistsException");
var de_BounceAction = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_TA] != null) {
    contents[_TA] = (0, import_smithy_client.expectString)(output[_TA]);
  }
  if (output[_SRC] != null) {
    contents[_SRC] = (0, import_smithy_client.expectString)(output[_SRC]);
  }
  if (output[_SC] != null) {
    contents[_SC] = (0, import_smithy_client.expectString)(output[_SC]);
  }
  if (output[_M] != null) {
    contents[_M] = (0, import_smithy_client.expectString)(output[_M]);
  }
  if (output[_S] != null) {
    contents[_S] = (0, import_smithy_client.expectString)(output[_S]);
  }
  return contents;
}, "de_BounceAction");
var de_BulkEmailDestinationStatus = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_St] != null) {
    contents[_St] = (0, import_smithy_client.expectString)(output[_St]);
  }
  if (output[_Er] != null) {
    contents[_Er] = (0, import_smithy_client.expectString)(output[_Er]);
  }
  if (output[_MIe] != null) {
    contents[_MIe] = (0, import_smithy_client.expectString)(output[_MIe]);
  }
  return contents;
}, "de_BulkEmailDestinationStatus");
var de_BulkEmailDestinationStatusList = /* @__PURE__ */ __name((output, context) => {
  return (output || []).filter((e) => e != null).map((entry) => {
    return de_BulkEmailDestinationStatus(entry, context);
  });
}, "de_BulkEmailDestinationStatusList");
var de_CannotDeleteException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_N] != null) {
    contents[_N] = (0, import_smithy_client.expectString)(output[_N]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_CannotDeleteException");
var de_CloneReceiptRuleSetResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_CloneReceiptRuleSetResponse");
var de_CloudWatchDestination = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output.DimensionConfigurations === "") {
    contents[_DC] = [];
  } else if (output[_DC] != null && output[_DC][_me] != null) {
    contents[_DC] = de_CloudWatchDimensionConfigurations((0, import_smithy_client.getArrayIfSingleItem)(output[_DC][_me]), context);
  }
  return contents;
}, "de_CloudWatchDestination");
var de_CloudWatchDimensionConfiguration = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_DN] != null) {
    contents[_DN] = (0, import_smithy_client.expectString)(output[_DN]);
  }
  if (output[_DVS] != null) {
    contents[_DVS] = (0, import_smithy_client.expectString)(output[_DVS]);
  }
  if (output[_DDV] != null) {
    contents[_DDV] = (0, import_smithy_client.expectString)(output[_DDV]);
  }
  return contents;
}, "de_CloudWatchDimensionConfiguration");
var de_CloudWatchDimensionConfigurations = /* @__PURE__ */ __name((output, context) => {
  return (output || []).filter((e) => e != null).map((entry) => {
    return de_CloudWatchDimensionConfiguration(entry, context);
  });
}, "de_CloudWatchDimensionConfigurations");
var de_ConfigurationSet = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_N] != null) {
    contents[_N] = (0, import_smithy_client.expectString)(output[_N]);
  }
  return contents;
}, "de_ConfigurationSet");
var de_ConfigurationSetAlreadyExistsException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_CSN] != null) {
    contents[_CSN] = (0, import_smithy_client.expectString)(output[_CSN]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_ConfigurationSetAlreadyExistsException");
var de_ConfigurationSetDoesNotExistException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_CSN] != null) {
    contents[_CSN] = (0, import_smithy_client.expectString)(output[_CSN]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_ConfigurationSetDoesNotExistException");
var de_ConfigurationSets = /* @__PURE__ */ __name((output, context) => {
  return (output || []).filter((e) => e != null).map((entry) => {
    return de_ConfigurationSet(entry, context);
  });
}, "de_ConfigurationSets");
var de_ConfigurationSetSendingPausedException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_CSN] != null) {
    contents[_CSN] = (0, import_smithy_client.expectString)(output[_CSN]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_ConfigurationSetSendingPausedException");
var de_ConnectAction = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_IARN] != null) {
    contents[_IARN] = (0, import_smithy_client.expectString)(output[_IARN]);
  }
  if (output[_IAMRARN] != null) {
    contents[_IAMRARN] = (0, import_smithy_client.expectString)(output[_IAMRARN]);
  }
  return contents;
}, "de_ConnectAction");
var de_CreateConfigurationSetEventDestinationResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_CreateConfigurationSetEventDestinationResponse");
var de_CreateConfigurationSetResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_CreateConfigurationSetResponse");
var de_CreateConfigurationSetTrackingOptionsResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_CreateConfigurationSetTrackingOptionsResponse");
var de_CreateReceiptFilterResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_CreateReceiptFilterResponse");
var de_CreateReceiptRuleResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_CreateReceiptRuleResponse");
var de_CreateReceiptRuleSetResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_CreateReceiptRuleSetResponse");
var de_CreateTemplateResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_CreateTemplateResponse");
var de_CustomVerificationEmailInvalidContentException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_CustomVerificationEmailInvalidContentException");
var de_CustomVerificationEmailTemplate = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_TN] != null) {
    contents[_TN] = (0, import_smithy_client.expectString)(output[_TN]);
  }
  if (output[_FEA] != null) {
    contents[_FEA] = (0, import_smithy_client.expectString)(output[_FEA]);
  }
  if (output[_TS] != null) {
    contents[_TS] = (0, import_smithy_client.expectString)(output[_TS]);
  }
  if (output[_SRURL] != null) {
    contents[_SRURL] = (0, import_smithy_client.expectString)(output[_SRURL]);
  }
  if (output[_FRURL] != null) {
    contents[_FRURL] = (0, import_smithy_client.expectString)(output[_FRURL]);
  }
  return contents;
}, "de_CustomVerificationEmailTemplate");
var de_CustomVerificationEmailTemplateAlreadyExistsException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_CVETN] != null) {
    contents[_CVETN] = (0, import_smithy_client.expectString)(output[_CVETN]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_CustomVerificationEmailTemplateAlreadyExistsException");
var de_CustomVerificationEmailTemplateDoesNotExistException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_CVETN] != null) {
    contents[_CVETN] = (0, import_smithy_client.expectString)(output[_CVETN]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_CustomVerificationEmailTemplateDoesNotExistException");
var de_CustomVerificationEmailTemplates = /* @__PURE__ */ __name((output, context) => {
  return (output || []).filter((e) => e != null).map((entry) => {
    return de_CustomVerificationEmailTemplate(entry, context);
  });
}, "de_CustomVerificationEmailTemplates");
var de_DeleteConfigurationSetEventDestinationResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_DeleteConfigurationSetEventDestinationResponse");
var de_DeleteConfigurationSetResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_DeleteConfigurationSetResponse");
var de_DeleteConfigurationSetTrackingOptionsResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_DeleteConfigurationSetTrackingOptionsResponse");
var de_DeleteIdentityPolicyResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_DeleteIdentityPolicyResponse");
var de_DeleteIdentityResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_DeleteIdentityResponse");
var de_DeleteReceiptFilterResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_DeleteReceiptFilterResponse");
var de_DeleteReceiptRuleResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_DeleteReceiptRuleResponse");
var de_DeleteReceiptRuleSetResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_DeleteReceiptRuleSetResponse");
var de_DeleteTemplateResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_DeleteTemplateResponse");
var de_DeliveryOptions = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_TP] != null) {
    contents[_TP] = (0, import_smithy_client.expectString)(output[_TP]);
  }
  return contents;
}, "de_DeliveryOptions");
var de_DescribeActiveReceiptRuleSetResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_Me] != null) {
    contents[_Me] = de_ReceiptRuleSetMetadata(output[_Me], context);
  }
  if (output.Rules === "") {
    contents[_Rul] = [];
  } else if (output[_Rul] != null && output[_Rul][_me] != null) {
    contents[_Rul] = de_ReceiptRulesList((0, import_smithy_client.getArrayIfSingleItem)(output[_Rul][_me]), context);
  }
  return contents;
}, "de_DescribeActiveReceiptRuleSetResponse");
var de_DescribeConfigurationSetResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_CS] != null) {
    contents[_CS] = de_ConfigurationSet(output[_CS], context);
  }
  if (output.EventDestinations === "") {
    contents[_EDv] = [];
  } else if (output[_EDv] != null && output[_EDv][_me] != null) {
    contents[_EDv] = de_EventDestinations((0, import_smithy_client.getArrayIfSingleItem)(output[_EDv][_me]), context);
  }
  if (output[_TO] != null) {
    contents[_TO] = de_TrackingOptions(output[_TO], context);
  }
  if (output[_DO] != null) {
    contents[_DO] = de_DeliveryOptions(output[_DO], context);
  }
  if (output[_RO] != null) {
    contents[_RO] = de_ReputationOptions(output[_RO], context);
  }
  return contents;
}, "de_DescribeConfigurationSetResponse");
var de_DescribeReceiptRuleResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_Ru] != null) {
    contents[_Ru] = de_ReceiptRule(output[_Ru], context);
  }
  return contents;
}, "de_DescribeReceiptRuleResponse");
var de_DescribeReceiptRuleSetResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_Me] != null) {
    contents[_Me] = de_ReceiptRuleSetMetadata(output[_Me], context);
  }
  if (output.Rules === "") {
    contents[_Rul] = [];
  } else if (output[_Rul] != null && output[_Rul][_me] != null) {
    contents[_Rul] = de_ReceiptRulesList((0, import_smithy_client.getArrayIfSingleItem)(output[_Rul][_me]), context);
  }
  return contents;
}, "de_DescribeReceiptRuleSetResponse");
var de_DkimAttributes = /* @__PURE__ */ __name((output, context) => {
  return output.reduce((acc, pair) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = de_IdentityDkimAttributes(pair["value"], context);
    return acc;
  }, {});
}, "de_DkimAttributes");
var de_EventDestination = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_N] != null) {
    contents[_N] = (0, import_smithy_client.expectString)(output[_N]);
  }
  if (output[_E] != null) {
    contents[_E] = (0, import_smithy_client.parseBoolean)(output[_E]);
  }
  if (output.MatchingEventTypes === "") {
    contents[_MET] = [];
  } else if (output[_MET] != null && output[_MET][_me] != null) {
    contents[_MET] = de_EventTypes((0, import_smithy_client.getArrayIfSingleItem)(output[_MET][_me]), context);
  }
  if (output[_KFD] != null) {
    contents[_KFD] = de_KinesisFirehoseDestination(output[_KFD], context);
  }
  if (output[_CWD] != null) {
    contents[_CWD] = de_CloudWatchDestination(output[_CWD], context);
  }
  if (output[_SNSD] != null) {
    contents[_SNSD] = de_SNSDestination(output[_SNSD], context);
  }
  return contents;
}, "de_EventDestination");
var de_EventDestinationAlreadyExistsException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_CSN] != null) {
    contents[_CSN] = (0, import_smithy_client.expectString)(output[_CSN]);
  }
  if (output[_EDN] != null) {
    contents[_EDN] = (0, import_smithy_client.expectString)(output[_EDN]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_EventDestinationAlreadyExistsException");
var de_EventDestinationDoesNotExistException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_CSN] != null) {
    contents[_CSN] = (0, import_smithy_client.expectString)(output[_CSN]);
  }
  if (output[_EDN] != null) {
    contents[_EDN] = (0, import_smithy_client.expectString)(output[_EDN]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_EventDestinationDoesNotExistException");
var de_EventDestinations = /* @__PURE__ */ __name((output, context) => {
  return (output || []).filter((e) => e != null).map((entry) => {
    return de_EventDestination(entry, context);
  });
}, "de_EventDestinations");
var de_EventTypes = /* @__PURE__ */ __name((output, context) => {
  return (output || []).filter((e) => e != null).map((entry) => {
    return (0, import_smithy_client.expectString)(entry);
  });
}, "de_EventTypes");
var de_FromEmailAddressNotVerifiedException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_FEA] != null) {
    contents[_FEA] = (0, import_smithy_client.expectString)(output[_FEA]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_FromEmailAddressNotVerifiedException");
var de_GetAccountSendingEnabledResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_E] != null) {
    contents[_E] = (0, import_smithy_client.parseBoolean)(output[_E]);
  }
  return contents;
}, "de_GetAccountSendingEnabledResponse");
var de_GetCustomVerificationEmailTemplateResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_TN] != null) {
    contents[_TN] = (0, import_smithy_client.expectString)(output[_TN]);
  }
  if (output[_FEA] != null) {
    contents[_FEA] = (0, import_smithy_client.expectString)(output[_FEA]);
  }
  if (output[_TS] != null) {
    contents[_TS] = (0, import_smithy_client.expectString)(output[_TS]);
  }
  if (output[_TC] != null) {
    contents[_TC] = (0, import_smithy_client.expectString)(output[_TC]);
  }
  if (output[_SRURL] != null) {
    contents[_SRURL] = (0, import_smithy_client.expectString)(output[_SRURL]);
  }
  if (output[_FRURL] != null) {
    contents[_FRURL] = (0, import_smithy_client.expectString)(output[_FRURL]);
  }
  return contents;
}, "de_GetCustomVerificationEmailTemplateResponse");
var de_GetIdentityDkimAttributesResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output.DkimAttributes === "") {
    contents[_DA] = {};
  } else if (output[_DA] != null && output[_DA][_e] != null) {
    contents[_DA] = de_DkimAttributes((0, import_smithy_client.getArrayIfSingleItem)(output[_DA][_e]), context);
  }
  return contents;
}, "de_GetIdentityDkimAttributesResponse");
var de_GetIdentityMailFromDomainAttributesResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output.MailFromDomainAttributes === "") {
    contents[_MFDA] = {};
  } else if (output[_MFDA] != null && output[_MFDA][_e] != null) {
    contents[_MFDA] = de_MailFromDomainAttributes((0, import_smithy_client.getArrayIfSingleItem)(output[_MFDA][_e]), context);
  }
  return contents;
}, "de_GetIdentityMailFromDomainAttributesResponse");
var de_GetIdentityNotificationAttributesResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output.NotificationAttributes === "") {
    contents[_NA] = {};
  } else if (output[_NA] != null && output[_NA][_e] != null) {
    contents[_NA] = de_NotificationAttributes((0, import_smithy_client.getArrayIfSingleItem)(output[_NA][_e]), context);
  }
  return contents;
}, "de_GetIdentityNotificationAttributesResponse");
var de_GetIdentityPoliciesResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output.Policies === "") {
    contents[_Po] = {};
  } else if (output[_Po] != null && output[_Po][_e] != null) {
    contents[_Po] = de_PolicyMap((0, import_smithy_client.getArrayIfSingleItem)(output[_Po][_e]), context);
  }
  return contents;
}, "de_GetIdentityPoliciesResponse");
var de_GetIdentityVerificationAttributesResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output.VerificationAttributes === "") {
    contents[_VA] = {};
  } else if (output[_VA] != null && output[_VA][_e] != null) {
    contents[_VA] = de_VerificationAttributes((0, import_smithy_client.getArrayIfSingleItem)(output[_VA][_e]), context);
  }
  return contents;
}, "de_GetIdentityVerificationAttributesResponse");
var de_GetSendQuotaResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_MHS] != null) {
    contents[_MHS] = (0, import_smithy_client.strictParseFloat)(output[_MHS]);
  }
  if (output[_MSR] != null) {
    contents[_MSR] = (0, import_smithy_client.strictParseFloat)(output[_MSR]);
  }
  if (output[_SLH] != null) {
    contents[_SLH] = (0, import_smithy_client.strictParseFloat)(output[_SLH]);
  }
  return contents;
}, "de_GetSendQuotaResponse");
var de_GetSendStatisticsResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output.SendDataPoints === "") {
    contents[_SDP] = [];
  } else if (output[_SDP] != null && output[_SDP][_me] != null) {
    contents[_SDP] = de_SendDataPointList((0, import_smithy_client.getArrayIfSingleItem)(output[_SDP][_me]), context);
  }
  return contents;
}, "de_GetSendStatisticsResponse");
var de_GetTemplateResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_Te] != null) {
    contents[_Te] = de_Template(output[_Te], context);
  }
  return contents;
}, "de_GetTemplateResponse");
var de_IdentityDkimAttributes = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_DE] != null) {
    contents[_DE] = (0, import_smithy_client.parseBoolean)(output[_DE]);
  }
  if (output[_DVSk] != null) {
    contents[_DVSk] = (0, import_smithy_client.expectString)(output[_DVSk]);
  }
  if (output.DkimTokens === "") {
    contents[_DTk] = [];
  } else if (output[_DTk] != null && output[_DTk][_me] != null) {
    contents[_DTk] = de_VerificationTokenList((0, import_smithy_client.getArrayIfSingleItem)(output[_DTk][_me]), context);
  }
  return contents;
}, "de_IdentityDkimAttributes");
var de_IdentityList = /* @__PURE__ */ __name((output, context) => {
  return (output || []).filter((e) => e != null).map((entry) => {
    return (0, import_smithy_client.expectString)(entry);
  });
}, "de_IdentityList");
var de_IdentityMailFromDomainAttributes = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_MFD] != null) {
    contents[_MFD] = (0, import_smithy_client.expectString)(output[_MFD]);
  }
  if (output[_MFDS] != null) {
    contents[_MFDS] = (0, import_smithy_client.expectString)(output[_MFDS]);
  }
  if (output[_BOMXF] != null) {
    contents[_BOMXF] = (0, import_smithy_client.expectString)(output[_BOMXF]);
  }
  return contents;
}, "de_IdentityMailFromDomainAttributes");
var de_IdentityNotificationAttributes = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_BTo] != null) {
    contents[_BTo] = (0, import_smithy_client.expectString)(output[_BTo]);
  }
  if (output[_CTo] != null) {
    contents[_CTo] = (0, import_smithy_client.expectString)(output[_CTo]);
  }
  if (output[_DTel] != null) {
    contents[_DTel] = (0, import_smithy_client.expectString)(output[_DTel]);
  }
  if (output[_FE] != null) {
    contents[_FE] = (0, import_smithy_client.parseBoolean)(output[_FE]);
  }
  if (output[_HIBNE] != null) {
    contents[_HIBNE] = (0, import_smithy_client.parseBoolean)(output[_HIBNE]);
  }
  if (output[_HICNE] != null) {
    contents[_HICNE] = (0, import_smithy_client.parseBoolean)(output[_HICNE]);
  }
  if (output[_HIDNE] != null) {
    contents[_HIDNE] = (0, import_smithy_client.parseBoolean)(output[_HIDNE]);
  }
  return contents;
}, "de_IdentityNotificationAttributes");
var de_IdentityVerificationAttributes = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_VS] != null) {
    contents[_VS] = (0, import_smithy_client.expectString)(output[_VS]);
  }
  if (output[_VT] != null) {
    contents[_VT] = (0, import_smithy_client.expectString)(output[_VT]);
  }
  return contents;
}, "de_IdentityVerificationAttributes");
var de_InvalidCloudWatchDestinationException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_CSN] != null) {
    contents[_CSN] = (0, import_smithy_client.expectString)(output[_CSN]);
  }
  if (output[_EDN] != null) {
    contents[_EDN] = (0, import_smithy_client.expectString)(output[_EDN]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_InvalidCloudWatchDestinationException");
var de_InvalidConfigurationSetException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_InvalidConfigurationSetException");
var de_InvalidDeliveryOptionsException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_InvalidDeliveryOptionsException");
var de_InvalidFirehoseDestinationException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_CSN] != null) {
    contents[_CSN] = (0, import_smithy_client.expectString)(output[_CSN]);
  }
  if (output[_EDN] != null) {
    contents[_EDN] = (0, import_smithy_client.expectString)(output[_EDN]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_InvalidFirehoseDestinationException");
var de_InvalidLambdaFunctionException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_FA] != null) {
    contents[_FA] = (0, import_smithy_client.expectString)(output[_FA]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_InvalidLambdaFunctionException");
var de_InvalidPolicyException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_InvalidPolicyException");
var de_InvalidRenderingParameterException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_TN] != null) {
    contents[_TN] = (0, import_smithy_client.expectString)(output[_TN]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_InvalidRenderingParameterException");
var de_InvalidS3ConfigurationException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_Bu] != null) {
    contents[_Bu] = (0, import_smithy_client.expectString)(output[_Bu]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_InvalidS3ConfigurationException");
var de_InvalidSNSDestinationException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_CSN] != null) {
    contents[_CSN] = (0, import_smithy_client.expectString)(output[_CSN]);
  }
  if (output[_EDN] != null) {
    contents[_EDN] = (0, import_smithy_client.expectString)(output[_EDN]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_InvalidSNSDestinationException");
var de_InvalidSnsTopicException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_To] != null) {
    contents[_To] = (0, import_smithy_client.expectString)(output[_To]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_InvalidSnsTopicException");
var de_InvalidTemplateException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_TN] != null) {
    contents[_TN] = (0, import_smithy_client.expectString)(output[_TN]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_InvalidTemplateException");
var de_InvalidTrackingOptionsException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_InvalidTrackingOptionsException");
var de_KinesisFirehoseDestination = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_IAMRARN] != null) {
    contents[_IAMRARN] = (0, import_smithy_client.expectString)(output[_IAMRARN]);
  }
  if (output[_DSARN] != null) {
    contents[_DSARN] = (0, import_smithy_client.expectString)(output[_DSARN]);
  }
  return contents;
}, "de_KinesisFirehoseDestination");
var de_LambdaAction = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_TA] != null) {
    contents[_TA] = (0, import_smithy_client.expectString)(output[_TA]);
  }
  if (output[_FA] != null) {
    contents[_FA] = (0, import_smithy_client.expectString)(output[_FA]);
  }
  if (output[_IT] != null) {
    contents[_IT] = (0, import_smithy_client.expectString)(output[_IT]);
  }
  return contents;
}, "de_LambdaAction");
var de_LimitExceededException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_LimitExceededException");
var de_ListConfigurationSetsResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output.ConfigurationSets === "") {
    contents[_CSo] = [];
  } else if (output[_CSo] != null && output[_CSo][_me] != null) {
    contents[_CSo] = de_ConfigurationSets((0, import_smithy_client.getArrayIfSingleItem)(output[_CSo][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = (0, import_smithy_client.expectString)(output[_NT]);
  }
  return contents;
}, "de_ListConfigurationSetsResponse");
var de_ListCustomVerificationEmailTemplatesResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output.CustomVerificationEmailTemplates === "") {
    contents[_CVET] = [];
  } else if (output[_CVET] != null && output[_CVET][_me] != null) {
    contents[_CVET] = de_CustomVerificationEmailTemplates((0, import_smithy_client.getArrayIfSingleItem)(output[_CVET][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = (0, import_smithy_client.expectString)(output[_NT]);
  }
  return contents;
}, "de_ListCustomVerificationEmailTemplatesResponse");
var de_ListIdentitiesResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output.Identities === "") {
    contents[_Id] = [];
  } else if (output[_Id] != null && output[_Id][_me] != null) {
    contents[_Id] = de_IdentityList((0, import_smithy_client.getArrayIfSingleItem)(output[_Id][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = (0, import_smithy_client.expectString)(output[_NT]);
  }
  return contents;
}, "de_ListIdentitiesResponse");
var de_ListIdentityPoliciesResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output.PolicyNames === "") {
    contents[_PNo] = [];
  } else if (output[_PNo] != null && output[_PNo][_me] != null) {
    contents[_PNo] = de_PolicyNameList((0, import_smithy_client.getArrayIfSingleItem)(output[_PNo][_me]), context);
  }
  return contents;
}, "de_ListIdentityPoliciesResponse");
var de_ListReceiptFiltersResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output.Filters === "") {
    contents[_Fi] = [];
  } else if (output[_Fi] != null && output[_Fi][_me] != null) {
    contents[_Fi] = de_ReceiptFilterList((0, import_smithy_client.getArrayIfSingleItem)(output[_Fi][_me]), context);
  }
  return contents;
}, "de_ListReceiptFiltersResponse");
var de_ListReceiptRuleSetsResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output.RuleSets === "") {
    contents[_RS] = [];
  } else if (output[_RS] != null && output[_RS][_me] != null) {
    contents[_RS] = de_ReceiptRuleSetsLists((0, import_smithy_client.getArrayIfSingleItem)(output[_RS][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = (0, import_smithy_client.expectString)(output[_NT]);
  }
  return contents;
}, "de_ListReceiptRuleSetsResponse");
var de_ListTemplatesResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output.TemplatesMetadata === "") {
    contents[_TM] = [];
  } else if (output[_TM] != null && output[_TM][_me] != null) {
    contents[_TM] = de_TemplateMetadataList((0, import_smithy_client.getArrayIfSingleItem)(output[_TM][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = (0, import_smithy_client.expectString)(output[_NT]);
  }
  return contents;
}, "de_ListTemplatesResponse");
var de_ListVerifiedEmailAddressesResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output.VerifiedEmailAddresses === "") {
    contents[_VEAe] = [];
  } else if (output[_VEAe] != null && output[_VEAe][_me] != null) {
    contents[_VEAe] = de_AddressList((0, import_smithy_client.getArrayIfSingleItem)(output[_VEAe][_me]), context);
  }
  return contents;
}, "de_ListVerifiedEmailAddressesResponse");
var de_MailFromDomainAttributes = /* @__PURE__ */ __name((output, context) => {
  return output.reduce((acc, pair) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = de_IdentityMailFromDomainAttributes(pair["value"], context);
    return acc;
  }, {});
}, "de_MailFromDomainAttributes");
var de_MailFromDomainNotVerifiedException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_MailFromDomainNotVerifiedException");
var de_MessageRejected = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_MessageRejected");
var de_MissingRenderingAttributeException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_TN] != null) {
    contents[_TN] = (0, import_smithy_client.expectString)(output[_TN]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_MissingRenderingAttributeException");
var de_NotificationAttributes = /* @__PURE__ */ __name((output, context) => {
  return output.reduce((acc, pair) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = de_IdentityNotificationAttributes(pair["value"], context);
    return acc;
  }, {});
}, "de_NotificationAttributes");
var de_PolicyMap = /* @__PURE__ */ __name((output, context) => {
  return output.reduce((acc, pair) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = (0, import_smithy_client.expectString)(pair["value"]);
    return acc;
  }, {});
}, "de_PolicyMap");
var de_PolicyNameList = /* @__PURE__ */ __name((output, context) => {
  return (output || []).filter((e) => e != null).map((entry) => {
    return (0, import_smithy_client.expectString)(entry);
  });
}, "de_PolicyNameList");
var de_ProductionAccessNotGrantedException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_ProductionAccessNotGrantedException");
var de_PutConfigurationSetDeliveryOptionsResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_PutConfigurationSetDeliveryOptionsResponse");
var de_PutIdentityPolicyResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_PutIdentityPolicyResponse");
var de_ReceiptAction = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_SA] != null) {
    contents[_SA] = de_S3Action(output[_SA], context);
  }
  if (output[_BAo] != null) {
    contents[_BAo] = de_BounceAction(output[_BAo], context);
  }
  if (output[_WA] != null) {
    contents[_WA] = de_WorkmailAction(output[_WA], context);
  }
  if (output[_LA] != null) {
    contents[_LA] = de_LambdaAction(output[_LA], context);
  }
  if (output[_SAt] != null) {
    contents[_SAt] = de_StopAction(output[_SAt], context);
  }
  if (output[_AHA] != null) {
    contents[_AHA] = de_AddHeaderAction(output[_AHA], context);
  }
  if (output[_SNSA] != null) {
    contents[_SNSA] = de_SNSAction(output[_SNSA], context);
  }
  if (output[_CAo] != null) {
    contents[_CAo] = de_ConnectAction(output[_CAo], context);
  }
  return contents;
}, "de_ReceiptAction");
var de_ReceiptActionsList = /* @__PURE__ */ __name((output, context) => {
  return (output || []).filter((e) => e != null).map((entry) => {
    return de_ReceiptAction(entry, context);
  });
}, "de_ReceiptActionsList");
var de_ReceiptFilter = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_N] != null) {
    contents[_N] = (0, import_smithy_client.expectString)(output[_N]);
  }
  if (output[_IF] != null) {
    contents[_IF] = de_ReceiptIpFilter(output[_IF], context);
  }
  return contents;
}, "de_ReceiptFilter");
var de_ReceiptFilterList = /* @__PURE__ */ __name((output, context) => {
  return (output || []).filter((e) => e != null).map((entry) => {
    return de_ReceiptFilter(entry, context);
  });
}, "de_ReceiptFilterList");
var de_ReceiptIpFilter = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_P] != null) {
    contents[_P] = (0, import_smithy_client.expectString)(output[_P]);
  }
  if (output[_Ci] != null) {
    contents[_Ci] = (0, import_smithy_client.expectString)(output[_Ci]);
  }
  return contents;
}, "de_ReceiptIpFilter");
var de_ReceiptRule = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_N] != null) {
    contents[_N] = (0, import_smithy_client.expectString)(output[_N]);
  }
  if (output[_E] != null) {
    contents[_E] = (0, import_smithy_client.parseBoolean)(output[_E]);
  }
  if (output[_TP] != null) {
    contents[_TP] = (0, import_smithy_client.expectString)(output[_TP]);
  }
  if (output.Recipients === "") {
    contents[_Re] = [];
  } else if (output[_Re] != null && output[_Re][_me] != null) {
    contents[_Re] = de_RecipientsList((0, import_smithy_client.getArrayIfSingleItem)(output[_Re][_me]), context);
  }
  if (output.Actions === "") {
    contents[_Ac] = [];
  } else if (output[_Ac] != null && output[_Ac][_me] != null) {
    contents[_Ac] = de_ReceiptActionsList((0, import_smithy_client.getArrayIfSingleItem)(output[_Ac][_me]), context);
  }
  if (output[_SEc] != null) {
    contents[_SEc] = (0, import_smithy_client.parseBoolean)(output[_SEc]);
  }
  return contents;
}, "de_ReceiptRule");
var de_ReceiptRuleSetMetadata = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_N] != null) {
    contents[_N] = (0, import_smithy_client.expectString)(output[_N]);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_CTr]));
  }
  return contents;
}, "de_ReceiptRuleSetMetadata");
var de_ReceiptRuleSetsLists = /* @__PURE__ */ __name((output, context) => {
  return (output || []).filter((e) => e != null).map((entry) => {
    return de_ReceiptRuleSetMetadata(entry, context);
  });
}, "de_ReceiptRuleSetsLists");
var de_ReceiptRulesList = /* @__PURE__ */ __name((output, context) => {
  return (output || []).filter((e) => e != null).map((entry) => {
    return de_ReceiptRule(entry, context);
  });
}, "de_ReceiptRulesList");
var de_RecipientsList = /* @__PURE__ */ __name((output, context) => {
  return (output || []).filter((e) => e != null).map((entry) => {
    return (0, import_smithy_client.expectString)(entry);
  });
}, "de_RecipientsList");
var de_ReorderReceiptRuleSetResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_ReorderReceiptRuleSetResponse");
var de_ReputationOptions = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_SEe] != null) {
    contents[_SEe] = (0, import_smithy_client.parseBoolean)(output[_SEe]);
  }
  if (output[_RME] != null) {
    contents[_RME] = (0, import_smithy_client.parseBoolean)(output[_RME]);
  }
  if (output[_LFS] != null) {
    contents[_LFS] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_LFS]));
  }
  return contents;
}, "de_ReputationOptions");
var de_RuleDoesNotExistException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_N] != null) {
    contents[_N] = (0, import_smithy_client.expectString)(output[_N]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_RuleDoesNotExistException");
var de_RuleSetDoesNotExistException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_N] != null) {
    contents[_N] = (0, import_smithy_client.expectString)(output[_N]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_RuleSetDoesNotExistException");
var de_S3Action = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_TA] != null) {
    contents[_TA] = (0, import_smithy_client.expectString)(output[_TA]);
  }
  if (output[_BN] != null) {
    contents[_BN] = (0, import_smithy_client.expectString)(output[_BN]);
  }
  if (output[_OKP] != null) {
    contents[_OKP] = (0, import_smithy_client.expectString)(output[_OKP]);
  }
  if (output[_KKA] != null) {
    contents[_KKA] = (0, import_smithy_client.expectString)(output[_KKA]);
  }
  if (output[_IRA] != null) {
    contents[_IRA] = (0, import_smithy_client.expectString)(output[_IRA]);
  }
  return contents;
}, "de_S3Action");
var de_SendBounceResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_MIe] != null) {
    contents[_MIe] = (0, import_smithy_client.expectString)(output[_MIe]);
  }
  return contents;
}, "de_SendBounceResponse");
var de_SendBulkTemplatedEmailResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output.Status === "") {
    contents[_St] = [];
  } else if (output[_St] != null && output[_St][_me] != null) {
    contents[_St] = de_BulkEmailDestinationStatusList((0, import_smithy_client.getArrayIfSingleItem)(output[_St][_me]), context);
  }
  return contents;
}, "de_SendBulkTemplatedEmailResponse");
var de_SendCustomVerificationEmailResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_MIe] != null) {
    contents[_MIe] = (0, import_smithy_client.expectString)(output[_MIe]);
  }
  return contents;
}, "de_SendCustomVerificationEmailResponse");
var de_SendDataPoint = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_Ti] != null) {
    contents[_Ti] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_Ti]));
  }
  if (output[_DAe] != null) {
    contents[_DAe] = (0, import_smithy_client.strictParseLong)(output[_DAe]);
  }
  if (output[_Bo] != null) {
    contents[_Bo] = (0, import_smithy_client.strictParseLong)(output[_Bo]);
  }
  if (output[_Co] != null) {
    contents[_Co] = (0, import_smithy_client.strictParseLong)(output[_Co]);
  }
  if (output[_Rej] != null) {
    contents[_Rej] = (0, import_smithy_client.strictParseLong)(output[_Rej]);
  }
  return contents;
}, "de_SendDataPoint");
var de_SendDataPointList = /* @__PURE__ */ __name((output, context) => {
  return (output || []).filter((e) => e != null).map((entry) => {
    return de_SendDataPoint(entry, context);
  });
}, "de_SendDataPointList");
var de_SendEmailResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_MIe] != null) {
    contents[_MIe] = (0, import_smithy_client.expectString)(output[_MIe]);
  }
  return contents;
}, "de_SendEmailResponse");
var de_SendRawEmailResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_MIe] != null) {
    contents[_MIe] = (0, import_smithy_client.expectString)(output[_MIe]);
  }
  return contents;
}, "de_SendRawEmailResponse");
var de_SendTemplatedEmailResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_MIe] != null) {
    contents[_MIe] = (0, import_smithy_client.expectString)(output[_MIe]);
  }
  return contents;
}, "de_SendTemplatedEmailResponse");
var de_SetActiveReceiptRuleSetResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_SetActiveReceiptRuleSetResponse");
var de_SetIdentityDkimEnabledResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_SetIdentityDkimEnabledResponse");
var de_SetIdentityFeedbackForwardingEnabledResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_SetIdentityFeedbackForwardingEnabledResponse");
var de_SetIdentityHeadersInNotificationsEnabledResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_SetIdentityHeadersInNotificationsEnabledResponse");
var de_SetIdentityMailFromDomainResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_SetIdentityMailFromDomainResponse");
var de_SetIdentityNotificationTopicResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_SetIdentityNotificationTopicResponse");
var de_SetReceiptRulePositionResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_SetReceiptRulePositionResponse");
var de_SNSAction = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_TA] != null) {
    contents[_TA] = (0, import_smithy_client.expectString)(output[_TA]);
  }
  if (output[_En] != null) {
    contents[_En] = (0, import_smithy_client.expectString)(output[_En]);
  }
  return contents;
}, "de_SNSAction");
var de_SNSDestination = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_TARN] != null) {
    contents[_TARN] = (0, import_smithy_client.expectString)(output[_TARN]);
  }
  return contents;
}, "de_SNSDestination");
var de_StopAction = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_Sc] != null) {
    contents[_Sc] = (0, import_smithy_client.expectString)(output[_Sc]);
  }
  if (output[_TA] != null) {
    contents[_TA] = (0, import_smithy_client.expectString)(output[_TA]);
  }
  return contents;
}, "de_StopAction");
var de_Template = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_TN] != null) {
    contents[_TN] = (0, import_smithy_client.expectString)(output[_TN]);
  }
  if (output[_SP] != null) {
    contents[_SP] = (0, import_smithy_client.expectString)(output[_SP]);
  }
  if (output[_TPe] != null) {
    contents[_TPe] = (0, import_smithy_client.expectString)(output[_TPe]);
  }
  if (output[_HP] != null) {
    contents[_HP] = (0, import_smithy_client.expectString)(output[_HP]);
  }
  return contents;
}, "de_Template");
var de_TemplateDoesNotExistException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_TN] != null) {
    contents[_TN] = (0, import_smithy_client.expectString)(output[_TN]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_TemplateDoesNotExistException");
var de_TemplateMetadata = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_N] != null) {
    contents[_N] = (0, import_smithy_client.expectString)(output[_N]);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_CTr]));
  }
  return contents;
}, "de_TemplateMetadata");
var de_TemplateMetadataList = /* @__PURE__ */ __name((output, context) => {
  return (output || []).filter((e) => e != null).map((entry) => {
    return de_TemplateMetadata(entry, context);
  });
}, "de_TemplateMetadataList");
var de_TestRenderTemplateResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_RTe] != null) {
    contents[_RTe] = (0, import_smithy_client.expectString)(output[_RTe]);
  }
  return contents;
}, "de_TestRenderTemplateResponse");
var de_TrackingOptions = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_CRD] != null) {
    contents[_CRD] = (0, import_smithy_client.expectString)(output[_CRD]);
  }
  return contents;
}, "de_TrackingOptions");
var de_TrackingOptionsAlreadyExistsException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_CSN] != null) {
    contents[_CSN] = (0, import_smithy_client.expectString)(output[_CSN]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_TrackingOptionsAlreadyExistsException");
var de_TrackingOptionsDoesNotExistException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_CSN] != null) {
    contents[_CSN] = (0, import_smithy_client.expectString)(output[_CSN]);
  }
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_TrackingOptionsDoesNotExistException");
var de_UpdateConfigurationSetEventDestinationResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_UpdateConfigurationSetEventDestinationResponse");
var de_UpdateConfigurationSetTrackingOptionsResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_UpdateConfigurationSetTrackingOptionsResponse");
var de_UpdateReceiptRuleResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_UpdateReceiptRuleResponse");
var de_UpdateTemplateResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_UpdateTemplateResponse");
var de_VerificationAttributes = /* @__PURE__ */ __name((output, context) => {
  return output.reduce((acc, pair) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = de_IdentityVerificationAttributes(pair["value"], context);
    return acc;
  }, {});
}, "de_VerificationAttributes");
var de_VerificationTokenList = /* @__PURE__ */ __name((output, context) => {
  return (output || []).filter((e) => e != null).map((entry) => {
    return (0, import_smithy_client.expectString)(entry);
  });
}, "de_VerificationTokenList");
var de_VerifyDomainDkimResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output.DkimTokens === "") {
    contents[_DTk] = [];
  } else if (output[_DTk] != null && output[_DTk][_me] != null) {
    contents[_DTk] = de_VerificationTokenList((0, import_smithy_client.getArrayIfSingleItem)(output[_DTk][_me]), context);
  }
  return contents;
}, "de_VerifyDomainDkimResponse");
var de_VerifyDomainIdentityResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_VT] != null) {
    contents[_VT] = (0, import_smithy_client.expectString)(output[_VT]);
  }
  return contents;
}, "de_VerifyDomainIdentityResponse");
var de_VerifyEmailIdentityResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  return contents;
}, "de_VerifyEmailIdentityResponse");
var de_WorkmailAction = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_TA] != null) {
    contents[_TA] = (0, import_smithy_client.expectString)(output[_TA]);
  }
  if (output[_OA] != null) {
    contents[_OA] = (0, import_smithy_client.expectString)(output[_OA]);
  }
  return contents;
}, "de_WorkmailAction");
var deserializeMetadata = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");
var throwDefaultError = (0, import_smithy_client.withBaseException)(SESServiceException);
var buildHttpRpcRequest = /* @__PURE__ */ __name(async (context, headers, path, resolvedHostname, body) => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers
  };
  if (resolvedHostname !== void 0) {
    contents.hostname = resolvedHostname;
  }
  if (body !== void 0) {
    contents.body = body;
  }
  return new import_protocol_http.HttpRequest(contents);
}, "buildHttpRpcRequest");
var SHARED_HEADERS = {
  "content-type": "application/x-www-form-urlencoded"
};
var _ = "2010-12-01";
var _A = "Action";
var _AD = "ArrivalDate";
var _AHA = "AddHeaderAction";
var _Ac = "Actions";
var _Af = "After";
var _B = "Body";
var _BA = "BccAddresses";
var _BAo = "BounceAction";
var _BN = "BucketName";
var _BOMXF = "BehaviorOnMXFailure";
var _BRIL = "BouncedRecipientInfoList";
var _BS = "BounceSender";
var _BSA = "BounceSenderArn";
var _BT = "BounceType";
var _BTo = "BounceTopic";
var _Bo = "Bounces";
var _Bu = "Bucket";
var _C = "Charset";
var _CA = "CcAddresses";
var _CAo = "ConnectAction";
var _CCS = "CreateConfigurationSet";
var _CCSED = "CreateConfigurationSetEventDestination";
var _CCSTO = "CreateConfigurationSetTrackingOptions";
var _CCVET = "CreateCustomVerificationEmailTemplate";
var _CRD = "CustomRedirectDomain";
var _CRF = "CreateReceiptFilter";
var _CRR = "CreateReceiptRule";
var _CRRS = "CloneReceiptRuleSet";
var _CRRSr = "CreateReceiptRuleSet";
var _CS = "ConfigurationSet";
var _CSAN = "ConfigurationSetAttributeNames";
var _CSN = "ConfigurationSetName";
var _CSo = "ConfigurationSets";
var _CT = "CreateTemplate";
var _CTo = "ComplaintTopic";
var _CTr = "CreatedTimestamp";
var _CVET = "CustomVerificationEmailTemplates";
var _CVETN = "CustomVerificationEmailTemplateName";
var _CWD = "CloudWatchDestination";
var _Ci = "Cidr";
var _Co = "Complaints";
var _D = "Destination";
var _DA = "DkimAttributes";
var _DARRS = "DescribeActiveReceiptRuleSet";
var _DAe = "DeliveryAttempts";
var _DC = "DimensionConfigurations";
var _DCS = "DeleteConfigurationSet";
var _DCSED = "DeleteConfigurationSetEventDestination";
var _DCSTO = "DeleteConfigurationSetTrackingOptions";
var _DCSe = "DescribeConfigurationSet";
var _DCVET = "DeleteCustomVerificationEmailTemplate";
var _DCi = "DiagnosticCode";
var _DDV = "DefaultDimensionValue";
var _DE = "DkimEnabled";
var _DI = "DeleteIdentity";
var _DIP = "DeleteIdentityPolicy";
var _DN = "DimensionName";
var _DO = "DeliveryOptions";
var _DRF = "DeleteReceiptFilter";
var _DRR = "DeleteReceiptRule";
var _DRRS = "DeleteReceiptRuleSet";
var _DRRSe = "DescribeReceiptRuleSet";
var _DRRe = "DescribeReceiptRule";
var _DSARN = "DeliveryStreamARN";
var _DT = "DeleteTemplate";
var _DTD = "DefaultTemplateData";
var _DTe = "DefaultTags";
var _DTel = "DeliveryTopic";
var _DTk = "DkimTokens";
var _DVEA = "DeleteVerifiedEmailAddress";
var _DVS = "DimensionValueSource";
var _DVSk = "DkimVerificationStatus";
var _Da = "Data";
var _De = "Destinations";
var _Do = "Domain";
var _E = "Enabled";
var _EA = "EmailAddress";
var _ED = "EventDestination";
var _EDN = "EventDestinationName";
var _EDv = "EventDestinations";
var _EF = "ExtensionFields";
var _En = "Encoding";
var _Er = "Error";
var _Ex = "Explanation";
var _F = "Filter";
var _FA = "FunctionArn";
var _FAr = "FromArn";
var _FE = "ForwardingEnabled";
var _FEA = "FromEmailAddress";
var _FN = "FilterName";
var _FR = "FinalRecipient";
var _FRURL = "FailureRedirectionURL";
var _Fi = "Filters";
var _GASE = "GetAccountSendingEnabled";
var _GCVET = "GetCustomVerificationEmailTemplate";
var _GIDA = "GetIdentityDkimAttributes";
var _GIMFDA = "GetIdentityMailFromDomainAttributes";
var _GINA = "GetIdentityNotificationAttributes";
var _GIP = "GetIdentityPolicies";
var _GIVA = "GetIdentityVerificationAttributes";
var _GSQ = "GetSendQuota";
var _GSS = "GetSendStatistics";
var _GT = "GetTemplate";
var _H = "Html";
var _HIBNE = "HeadersInBounceNotificationsEnabled";
var _HICNE = "HeadersInComplaintNotificationsEnabled";
var _HIDNE = "HeadersInDeliveryNotificationsEnabled";
var _HN = "HeaderName";
var _HP = "HtmlPart";
var _HV = "HeaderValue";
var _I = "Identity";
var _IAMRARN = "IAMRoleARN";
var _IARN = "InstanceARN";
var _IF = "IpFilter";
var _IRA = "IamRoleArn";
var _IT = "InvocationType";
var _ITd = "IdentityType";
var _Id = "Identities";
var _KFD = "KinesisFirehoseDestination";
var _KKA = "KmsKeyArn";
var _LA = "LambdaAction";
var _LAD = "LastAttemptDate";
var _LCS = "ListConfigurationSets";
var _LCVET = "ListCustomVerificationEmailTemplates";
var _LFS = "LastFreshStart";
var _LI = "ListIdentities";
var _LIP = "ListIdentityPolicies";
var _LRF = "ListReceiptFilters";
var _LRRS = "ListReceiptRuleSets";
var _LT = "ListTemplates";
var _LVEA = "ListVerifiedEmailAddresses";
var _M = "Message";
var _MD = "MessageDsn";
var _MET = "MatchingEventTypes";
var _MFD = "MailFromDomain";
var _MFDA = "MailFromDomainAttributes";
var _MFDS = "MailFromDomainStatus";
var _MHS = "Max24HourSend";
var _MI = "MaxItems";
var _MIe = "MessageId";
var _MR = "MaxResults";
var _MSR = "MaxSendRate";
var _Me = "Metadata";
var _N = "Name";
var _NA = "NotificationAttributes";
var _NT = "NextToken";
var _NTo = "NotificationType";
var _OA = "OrganizationArn";
var _OKP = "ObjectKeyPrefix";
var _OMI = "OriginalMessageId";
var _ORSN = "OriginalRuleSetName";
var _P = "Policy";
var _PCSDO = "PutConfigurationSetDeliveryOptions";
var _PIP = "PutIdentityPolicy";
var _PN = "PolicyName";
var _PNo = "PolicyNames";
var _Po = "Policies";
var _R = "Recipient";
var _RA = "RecipientArn";
var _RDF = "RecipientDsnFields";
var _RM = "ReportingMta";
var _RME = "ReputationMetricsEnabled";
var _RMa = "RawMessage";
var _RMe = "RemoteMta";
var _RN = "RuleName";
var _RNu = "RuleNames";
var _RO = "ReputationOptions";
var _RP = "ReturnPath";
var _RPA = "ReturnPathArn";
var _RRRS = "ReorderReceiptRuleSet";
var _RS = "RuleSets";
var _RSN = "RuleSetName";
var _RT = "ReplacementTags";
var _RTA = "ReplyToAddresses";
var _RTD = "ReplacementTemplateData";
var _RTe = "RenderedTemplate";
var _Re = "Recipients";
var _Rej = "Rejects";
var _Ru = "Rule";
var _Rul = "Rules";
var _S = "Sender";
var _SA = "S3Action";
var _SARRS = "SetActiveReceiptRuleSet";
var _SAo = "SourceArn";
var _SAt = "StopAction";
var _SB = "SendBounce";
var _SBTE = "SendBulkTemplatedEmail";
var _SC = "StatusCode";
var _SCVE = "SendCustomVerificationEmail";
var _SDP = "SendDataPoints";
var _SE = "SendEmail";
var _SEc = "ScanEnabled";
var _SEe = "SendingEnabled";
var _SIDE = "SetIdentityDkimEnabled";
var _SIFFE = "SetIdentityFeedbackForwardingEnabled";
var _SIHINE = "SetIdentityHeadersInNotificationsEnabled";
var _SIMFD = "SetIdentityMailFromDomain";
var _SINT = "SetIdentityNotificationTopic";
var _SLH = "SentLast24Hours";
var _SNSA = "SNSAction";
var _SNSD = "SNSDestination";
var _SP = "SubjectPart";
var _SRC = "SmtpReplyCode";
var _SRE = "SendRawEmail";
var _SRRP = "SetReceiptRulePosition";
var _SRURL = "SuccessRedirectionURL";
var _ST = "SnsTopic";
var _STE = "SendTemplatedEmail";
var _Sc = "Scope";
var _So = "Source";
var _St = "Status";
var _Su = "Subject";
var _T = "Text";
var _TA = "TopicArn";
var _TARN = "TopicARN";
var _TAe = "TemplateArn";
var _TAo = "ToAddresses";
var _TC = "TemplateContent";
var _TD = "TemplateData";
var _TM = "TemplatesMetadata";
var _TN = "TemplateName";
var _TO = "TrackingOptions";
var _TP = "TlsPolicy";
var _TPe = "TextPart";
var _TRT = "TestRenderTemplate";
var _TS = "TemplateSubject";
var _Ta = "Tags";
var _Te = "Template";
var _Ti = "Timestamp";
var _To = "Topic";
var _UASE = "UpdateAccountSendingEnabled";
var _UCSED = "UpdateConfigurationSetEventDestination";
var _UCSRME = "UpdateConfigurationSetReputationMetricsEnabled";
var _UCSSE = "UpdateConfigurationSetSendingEnabled";
var _UCSTO = "UpdateConfigurationSetTrackingOptions";
var _UCVET = "UpdateCustomVerificationEmailTemplate";
var _URR = "UpdateReceiptRule";
var _UT = "UpdateTemplate";
var _V = "Version";
var _VA = "VerificationAttributes";
var _VDD = "VerifyDomainDkim";
var _VDI = "VerifyDomainIdentity";
var _VEA = "VerifyEmailAddress";
var _VEAe = "VerifiedEmailAddresses";
var _VEI = "VerifyEmailIdentity";
var _VS = "VerificationStatus";
var _VT = "VerificationToken";
var _Va = "Value";
var _WA = "WorkmailAction";
var _e = "entry";
var _m = "message";
var _me = "member";
var buildFormUrlencodedString = /* @__PURE__ */ __name((formEntries) => Object.entries(formEntries).map(([key, value]) => (0, import_smithy_client.extendedEncodeURIComponent)(key) + "=" + (0, import_smithy_client.extendedEncodeURIComponent)(value)).join("&"), "buildFormUrlencodedString");
var loadQueryErrorCode = /* @__PURE__ */ __name((output, data) => {
  if (data.Error?.Code !== void 0) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
}, "loadQueryErrorCode");

// src/commands/CloneReceiptRuleSetCommand.ts
var CloneReceiptRuleSetCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "CloneReceiptRuleSet", {}).n("SESClient", "CloneReceiptRuleSetCommand").f(void 0, void 0).ser(se_CloneReceiptRuleSetCommand).de(de_CloneReceiptRuleSetCommand).build() {
  static {
    __name(this, "CloneReceiptRuleSetCommand");
  }
};

// src/commands/CreateConfigurationSetCommand.ts



var CreateConfigurationSetCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "CreateConfigurationSet", {}).n("SESClient", "CreateConfigurationSetCommand").f(void 0, void 0).ser(se_CreateConfigurationSetCommand).de(de_CreateConfigurationSetCommand).build() {
  static {
    __name(this, "CreateConfigurationSetCommand");
  }
};

// src/commands/CreateConfigurationSetEventDestinationCommand.ts



var CreateConfigurationSetEventDestinationCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "CreateConfigurationSetEventDestination", {}).n("SESClient", "CreateConfigurationSetEventDestinationCommand").f(void 0, void 0).ser(se_CreateConfigurationSetEventDestinationCommand).de(de_CreateConfigurationSetEventDestinationCommand).build() {
  static {
    __name(this, "CreateConfigurationSetEventDestinationCommand");
  }
};

// src/commands/CreateConfigurationSetTrackingOptionsCommand.ts



var CreateConfigurationSetTrackingOptionsCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "CreateConfigurationSetTrackingOptions", {}).n("SESClient", "CreateConfigurationSetTrackingOptionsCommand").f(void 0, void 0).ser(se_CreateConfigurationSetTrackingOptionsCommand).de(de_CreateConfigurationSetTrackingOptionsCommand).build() {
  static {
    __name(this, "CreateConfigurationSetTrackingOptionsCommand");
  }
};

// src/commands/CreateCustomVerificationEmailTemplateCommand.ts



var CreateCustomVerificationEmailTemplateCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "CreateCustomVerificationEmailTemplate", {}).n("SESClient", "CreateCustomVerificationEmailTemplateCommand").f(void 0, void 0).ser(se_CreateCustomVerificationEmailTemplateCommand).de(de_CreateCustomVerificationEmailTemplateCommand).build() {
  static {
    __name(this, "CreateCustomVerificationEmailTemplateCommand");
  }
};

// src/commands/CreateReceiptFilterCommand.ts



var CreateReceiptFilterCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "CreateReceiptFilter", {}).n("SESClient", "CreateReceiptFilterCommand").f(void 0, void 0).ser(se_CreateReceiptFilterCommand).de(de_CreateReceiptFilterCommand).build() {
  static {
    __name(this, "CreateReceiptFilterCommand");
  }
};

// src/commands/CreateReceiptRuleCommand.ts



var CreateReceiptRuleCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "CreateReceiptRule", {}).n("SESClient", "CreateReceiptRuleCommand").f(void 0, void 0).ser(se_CreateReceiptRuleCommand).de(de_CreateReceiptRuleCommand).build() {
  static {
    __name(this, "CreateReceiptRuleCommand");
  }
};

// src/commands/CreateReceiptRuleSetCommand.ts



var CreateReceiptRuleSetCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "CreateReceiptRuleSet", {}).n("SESClient", "CreateReceiptRuleSetCommand").f(void 0, void 0).ser(se_CreateReceiptRuleSetCommand).de(de_CreateReceiptRuleSetCommand).build() {
  static {
    __name(this, "CreateReceiptRuleSetCommand");
  }
};

// src/commands/CreateTemplateCommand.ts



var CreateTemplateCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "CreateTemplate", {}).n("SESClient", "CreateTemplateCommand").f(void 0, void 0).ser(se_CreateTemplateCommand).de(de_CreateTemplateCommand).build() {
  static {
    __name(this, "CreateTemplateCommand");
  }
};

// src/commands/DeleteConfigurationSetCommand.ts



var DeleteConfigurationSetCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "DeleteConfigurationSet", {}).n("SESClient", "DeleteConfigurationSetCommand").f(void 0, void 0).ser(se_DeleteConfigurationSetCommand).de(de_DeleteConfigurationSetCommand).build() {
  static {
    __name(this, "DeleteConfigurationSetCommand");
  }
};

// src/commands/DeleteConfigurationSetEventDestinationCommand.ts



var DeleteConfigurationSetEventDestinationCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "DeleteConfigurationSetEventDestination", {}).n("SESClient", "DeleteConfigurationSetEventDestinationCommand").f(void 0, void 0).ser(se_DeleteConfigurationSetEventDestinationCommand).de(de_DeleteConfigurationSetEventDestinationCommand).build() {
  static {
    __name(this, "DeleteConfigurationSetEventDestinationCommand");
  }
};

// src/commands/DeleteConfigurationSetTrackingOptionsCommand.ts



var DeleteConfigurationSetTrackingOptionsCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "DeleteConfigurationSetTrackingOptions", {}).n("SESClient", "DeleteConfigurationSetTrackingOptionsCommand").f(void 0, void 0).ser(se_DeleteConfigurationSetTrackingOptionsCommand).de(de_DeleteConfigurationSetTrackingOptionsCommand).build() {
  static {
    __name(this, "DeleteConfigurationSetTrackingOptionsCommand");
  }
};

// src/commands/DeleteCustomVerificationEmailTemplateCommand.ts



var DeleteCustomVerificationEmailTemplateCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "DeleteCustomVerificationEmailTemplate", {}).n("SESClient", "DeleteCustomVerificationEmailTemplateCommand").f(void 0, void 0).ser(se_DeleteCustomVerificationEmailTemplateCommand).de(de_DeleteCustomVerificationEmailTemplateCommand).build() {
  static {
    __name(this, "DeleteCustomVerificationEmailTemplateCommand");
  }
};

// src/commands/DeleteIdentityCommand.ts



var DeleteIdentityCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "DeleteIdentity", {}).n("SESClient", "DeleteIdentityCommand").f(void 0, void 0).ser(se_DeleteIdentityCommand).de(de_DeleteIdentityCommand).build() {
  static {
    __name(this, "DeleteIdentityCommand");
  }
};

// src/commands/DeleteIdentityPolicyCommand.ts



var DeleteIdentityPolicyCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "DeleteIdentityPolicy", {}).n("SESClient", "DeleteIdentityPolicyCommand").f(void 0, void 0).ser(se_DeleteIdentityPolicyCommand).de(de_DeleteIdentityPolicyCommand).build() {
  static {
    __name(this, "DeleteIdentityPolicyCommand");
  }
};

// src/commands/DeleteReceiptFilterCommand.ts



var DeleteReceiptFilterCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "DeleteReceiptFilter", {}).n("SESClient", "DeleteReceiptFilterCommand").f(void 0, void 0).ser(se_DeleteReceiptFilterCommand).de(de_DeleteReceiptFilterCommand).build() {
  static {
    __name(this, "DeleteReceiptFilterCommand");
  }
};

// src/commands/DeleteReceiptRuleCommand.ts



var DeleteReceiptRuleCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "DeleteReceiptRule", {}).n("SESClient", "DeleteReceiptRuleCommand").f(void 0, void 0).ser(se_DeleteReceiptRuleCommand).de(de_DeleteReceiptRuleCommand).build() {
  static {
    __name(this, "DeleteReceiptRuleCommand");
  }
};

// src/commands/DeleteReceiptRuleSetCommand.ts



var DeleteReceiptRuleSetCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "DeleteReceiptRuleSet", {}).n("SESClient", "DeleteReceiptRuleSetCommand").f(void 0, void 0).ser(se_DeleteReceiptRuleSetCommand).de(de_DeleteReceiptRuleSetCommand).build() {
  static {
    __name(this, "DeleteReceiptRuleSetCommand");
  }
};

// src/commands/DeleteTemplateCommand.ts



var DeleteTemplateCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "DeleteTemplate", {}).n("SESClient", "DeleteTemplateCommand").f(void 0, void 0).ser(se_DeleteTemplateCommand).de(de_DeleteTemplateCommand).build() {
  static {
    __name(this, "DeleteTemplateCommand");
  }
};

// src/commands/DeleteVerifiedEmailAddressCommand.ts



var DeleteVerifiedEmailAddressCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "DeleteVerifiedEmailAddress", {}).n("SESClient", "DeleteVerifiedEmailAddressCommand").f(void 0, void 0).ser(se_DeleteVerifiedEmailAddressCommand).de(de_DeleteVerifiedEmailAddressCommand).build() {
  static {
    __name(this, "DeleteVerifiedEmailAddressCommand");
  }
};

// src/commands/DescribeActiveReceiptRuleSetCommand.ts



var DescribeActiveReceiptRuleSetCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "DescribeActiveReceiptRuleSet", {}).n("SESClient", "DescribeActiveReceiptRuleSetCommand").f(void 0, void 0).ser(se_DescribeActiveReceiptRuleSetCommand).de(de_DescribeActiveReceiptRuleSetCommand).build() {
  static {
    __name(this, "DescribeActiveReceiptRuleSetCommand");
  }
};

// src/commands/DescribeConfigurationSetCommand.ts



var DescribeConfigurationSetCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "DescribeConfigurationSet", {}).n("SESClient", "DescribeConfigurationSetCommand").f(void 0, void 0).ser(se_DescribeConfigurationSetCommand).de(de_DescribeConfigurationSetCommand).build() {
  static {
    __name(this, "DescribeConfigurationSetCommand");
  }
};

// src/commands/DescribeReceiptRuleCommand.ts



var DescribeReceiptRuleCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "DescribeReceiptRule", {}).n("SESClient", "DescribeReceiptRuleCommand").f(void 0, void 0).ser(se_DescribeReceiptRuleCommand).de(de_DescribeReceiptRuleCommand).build() {
  static {
    __name(this, "DescribeReceiptRuleCommand");
  }
};

// src/commands/DescribeReceiptRuleSetCommand.ts



var DescribeReceiptRuleSetCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "DescribeReceiptRuleSet", {}).n("SESClient", "DescribeReceiptRuleSetCommand").f(void 0, void 0).ser(se_DescribeReceiptRuleSetCommand).de(de_DescribeReceiptRuleSetCommand).build() {
  static {
    __name(this, "DescribeReceiptRuleSetCommand");
  }
};

// src/commands/GetAccountSendingEnabledCommand.ts



var GetAccountSendingEnabledCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "GetAccountSendingEnabled", {}).n("SESClient", "GetAccountSendingEnabledCommand").f(void 0, void 0).ser(se_GetAccountSendingEnabledCommand).de(de_GetAccountSendingEnabledCommand).build() {
  static {
    __name(this, "GetAccountSendingEnabledCommand");
  }
};

// src/commands/GetCustomVerificationEmailTemplateCommand.ts



var GetCustomVerificationEmailTemplateCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "GetCustomVerificationEmailTemplate", {}).n("SESClient", "GetCustomVerificationEmailTemplateCommand").f(void 0, void 0).ser(se_GetCustomVerificationEmailTemplateCommand).de(de_GetCustomVerificationEmailTemplateCommand).build() {
  static {
    __name(this, "GetCustomVerificationEmailTemplateCommand");
  }
};

// src/commands/GetIdentityDkimAttributesCommand.ts



var GetIdentityDkimAttributesCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "GetIdentityDkimAttributes", {}).n("SESClient", "GetIdentityDkimAttributesCommand").f(void 0, void 0).ser(se_GetIdentityDkimAttributesCommand).de(de_GetIdentityDkimAttributesCommand).build() {
  static {
    __name(this, "GetIdentityDkimAttributesCommand");
  }
};

// src/commands/GetIdentityMailFromDomainAttributesCommand.ts



var GetIdentityMailFromDomainAttributesCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "GetIdentityMailFromDomainAttributes", {}).n("SESClient", "GetIdentityMailFromDomainAttributesCommand").f(void 0, void 0).ser(se_GetIdentityMailFromDomainAttributesCommand).de(de_GetIdentityMailFromDomainAttributesCommand).build() {
  static {
    __name(this, "GetIdentityMailFromDomainAttributesCommand");
  }
};

// src/commands/GetIdentityNotificationAttributesCommand.ts



var GetIdentityNotificationAttributesCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "GetIdentityNotificationAttributes", {}).n("SESClient", "GetIdentityNotificationAttributesCommand").f(void 0, void 0).ser(se_GetIdentityNotificationAttributesCommand).de(de_GetIdentityNotificationAttributesCommand).build() {
  static {
    __name(this, "GetIdentityNotificationAttributesCommand");
  }
};

// src/commands/GetIdentityPoliciesCommand.ts



var GetIdentityPoliciesCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "GetIdentityPolicies", {}).n("SESClient", "GetIdentityPoliciesCommand").f(void 0, void 0).ser(se_GetIdentityPoliciesCommand).de(de_GetIdentityPoliciesCommand).build() {
  static {
    __name(this, "GetIdentityPoliciesCommand");
  }
};

// src/commands/GetIdentityVerificationAttributesCommand.ts



var GetIdentityVerificationAttributesCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "GetIdentityVerificationAttributes", {}).n("SESClient", "GetIdentityVerificationAttributesCommand").f(void 0, void 0).ser(se_GetIdentityVerificationAttributesCommand).de(de_GetIdentityVerificationAttributesCommand).build() {
  static {
    __name(this, "GetIdentityVerificationAttributesCommand");
  }
};

// src/commands/GetSendQuotaCommand.ts



var GetSendQuotaCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "GetSendQuota", {}).n("SESClient", "GetSendQuotaCommand").f(void 0, void 0).ser(se_GetSendQuotaCommand).de(de_GetSendQuotaCommand).build() {
  static {
    __name(this, "GetSendQuotaCommand");
  }
};

// src/commands/GetSendStatisticsCommand.ts



var GetSendStatisticsCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "GetSendStatistics", {}).n("SESClient", "GetSendStatisticsCommand").f(void 0, void 0).ser(se_GetSendStatisticsCommand).de(de_GetSendStatisticsCommand).build() {
  static {
    __name(this, "GetSendStatisticsCommand");
  }
};

// src/commands/GetTemplateCommand.ts



var GetTemplateCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "GetTemplate", {}).n("SESClient", "GetTemplateCommand").f(void 0, void 0).ser(se_GetTemplateCommand).de(de_GetTemplateCommand).build() {
  static {
    __name(this, "GetTemplateCommand");
  }
};

// src/commands/ListConfigurationSetsCommand.ts



var ListConfigurationSetsCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "ListConfigurationSets", {}).n("SESClient", "ListConfigurationSetsCommand").f(void 0, void 0).ser(se_ListConfigurationSetsCommand).de(de_ListConfigurationSetsCommand).build() {
  static {
    __name(this, "ListConfigurationSetsCommand");
  }
};

// src/commands/ListCustomVerificationEmailTemplatesCommand.ts



var ListCustomVerificationEmailTemplatesCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "ListCustomVerificationEmailTemplates", {}).n("SESClient", "ListCustomVerificationEmailTemplatesCommand").f(void 0, void 0).ser(se_ListCustomVerificationEmailTemplatesCommand).de(de_ListCustomVerificationEmailTemplatesCommand).build() {
  static {
    __name(this, "ListCustomVerificationEmailTemplatesCommand");
  }
};

// src/commands/ListIdentitiesCommand.ts



var ListIdentitiesCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "ListIdentities", {}).n("SESClient", "ListIdentitiesCommand").f(void 0, void 0).ser(se_ListIdentitiesCommand).de(de_ListIdentitiesCommand).build() {
  static {
    __name(this, "ListIdentitiesCommand");
  }
};

// src/commands/ListIdentityPoliciesCommand.ts



var ListIdentityPoliciesCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "ListIdentityPolicies", {}).n("SESClient", "ListIdentityPoliciesCommand").f(void 0, void 0).ser(se_ListIdentityPoliciesCommand).de(de_ListIdentityPoliciesCommand).build() {
  static {
    __name(this, "ListIdentityPoliciesCommand");
  }
};

// src/commands/ListReceiptFiltersCommand.ts



var ListReceiptFiltersCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "ListReceiptFilters", {}).n("SESClient", "ListReceiptFiltersCommand").f(void 0, void 0).ser(se_ListReceiptFiltersCommand).de(de_ListReceiptFiltersCommand).build() {
  static {
    __name(this, "ListReceiptFiltersCommand");
  }
};

// src/commands/ListReceiptRuleSetsCommand.ts



var ListReceiptRuleSetsCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "ListReceiptRuleSets", {}).n("SESClient", "ListReceiptRuleSetsCommand").f(void 0, void 0).ser(se_ListReceiptRuleSetsCommand).de(de_ListReceiptRuleSetsCommand).build() {
  static {
    __name(this, "ListReceiptRuleSetsCommand");
  }
};

// src/commands/ListTemplatesCommand.ts



var ListTemplatesCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "ListTemplates", {}).n("SESClient", "ListTemplatesCommand").f(void 0, void 0).ser(se_ListTemplatesCommand).de(de_ListTemplatesCommand).build() {
  static {
    __name(this, "ListTemplatesCommand");
  }
};

// src/commands/ListVerifiedEmailAddressesCommand.ts



var ListVerifiedEmailAddressesCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "ListVerifiedEmailAddresses", {}).n("SESClient", "ListVerifiedEmailAddressesCommand").f(void 0, void 0).ser(se_ListVerifiedEmailAddressesCommand).de(de_ListVerifiedEmailAddressesCommand).build() {
  static {
    __name(this, "ListVerifiedEmailAddressesCommand");
  }
};

// src/commands/PutConfigurationSetDeliveryOptionsCommand.ts



var PutConfigurationSetDeliveryOptionsCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "PutConfigurationSetDeliveryOptions", {}).n("SESClient", "PutConfigurationSetDeliveryOptionsCommand").f(void 0, void 0).ser(se_PutConfigurationSetDeliveryOptionsCommand).de(de_PutConfigurationSetDeliveryOptionsCommand).build() {
  static {
    __name(this, "PutConfigurationSetDeliveryOptionsCommand");
  }
};

// src/commands/PutIdentityPolicyCommand.ts



var PutIdentityPolicyCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "PutIdentityPolicy", {}).n("SESClient", "PutIdentityPolicyCommand").f(void 0, void 0).ser(se_PutIdentityPolicyCommand).de(de_PutIdentityPolicyCommand).build() {
  static {
    __name(this, "PutIdentityPolicyCommand");
  }
};

// src/commands/ReorderReceiptRuleSetCommand.ts



var ReorderReceiptRuleSetCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "ReorderReceiptRuleSet", {}).n("SESClient", "ReorderReceiptRuleSetCommand").f(void 0, void 0).ser(se_ReorderReceiptRuleSetCommand).de(de_ReorderReceiptRuleSetCommand).build() {
  static {
    __name(this, "ReorderReceiptRuleSetCommand");
  }
};

// src/commands/SendBounceCommand.ts



var SendBounceCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "SendBounce", {}).n("SESClient", "SendBounceCommand").f(void 0, void 0).ser(se_SendBounceCommand).de(de_SendBounceCommand).build() {
  static {
    __name(this, "SendBounceCommand");
  }
};

// src/commands/SendBulkTemplatedEmailCommand.ts



var SendBulkTemplatedEmailCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "SendBulkTemplatedEmail", {}).n("SESClient", "SendBulkTemplatedEmailCommand").f(void 0, void 0).ser(se_SendBulkTemplatedEmailCommand).de(de_SendBulkTemplatedEmailCommand).build() {
  static {
    __name(this, "SendBulkTemplatedEmailCommand");
  }
};

// src/commands/SendCustomVerificationEmailCommand.ts



var SendCustomVerificationEmailCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "SendCustomVerificationEmail", {}).n("SESClient", "SendCustomVerificationEmailCommand").f(void 0, void 0).ser(se_SendCustomVerificationEmailCommand).de(de_SendCustomVerificationEmailCommand).build() {
  static {
    __name(this, "SendCustomVerificationEmailCommand");
  }
};

// src/commands/SendEmailCommand.ts



var SendEmailCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "SendEmail", {}).n("SESClient", "SendEmailCommand").f(void 0, void 0).ser(se_SendEmailCommand).de(de_SendEmailCommand).build() {
  static {
    __name(this, "SendEmailCommand");
  }
};

// src/commands/SendRawEmailCommand.ts



var SendRawEmailCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "SendRawEmail", {}).n("SESClient", "SendRawEmailCommand").f(void 0, void 0).ser(se_SendRawEmailCommand).de(de_SendRawEmailCommand).build() {
  static {
    __name(this, "SendRawEmailCommand");
  }
};

// src/commands/SendTemplatedEmailCommand.ts



var SendTemplatedEmailCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "SendTemplatedEmail", {}).n("SESClient", "SendTemplatedEmailCommand").f(void 0, void 0).ser(se_SendTemplatedEmailCommand).de(de_SendTemplatedEmailCommand).build() {
  static {
    __name(this, "SendTemplatedEmailCommand");
  }
};

// src/commands/SetActiveReceiptRuleSetCommand.ts



var SetActiveReceiptRuleSetCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "SetActiveReceiptRuleSet", {}).n("SESClient", "SetActiveReceiptRuleSetCommand").f(void 0, void 0).ser(se_SetActiveReceiptRuleSetCommand).de(de_SetActiveReceiptRuleSetCommand).build() {
  static {
    __name(this, "SetActiveReceiptRuleSetCommand");
  }
};

// src/commands/SetIdentityDkimEnabledCommand.ts



var SetIdentityDkimEnabledCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "SetIdentityDkimEnabled", {}).n("SESClient", "SetIdentityDkimEnabledCommand").f(void 0, void 0).ser(se_SetIdentityDkimEnabledCommand).de(de_SetIdentityDkimEnabledCommand).build() {
  static {
    __name(this, "SetIdentityDkimEnabledCommand");
  }
};

// src/commands/SetIdentityFeedbackForwardingEnabledCommand.ts



var SetIdentityFeedbackForwardingEnabledCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "SetIdentityFeedbackForwardingEnabled", {}).n("SESClient", "SetIdentityFeedbackForwardingEnabledCommand").f(void 0, void 0).ser(se_SetIdentityFeedbackForwardingEnabledCommand).de(de_SetIdentityFeedbackForwardingEnabledCommand).build() {
  static {
    __name(this, "SetIdentityFeedbackForwardingEnabledCommand");
  }
};

// src/commands/SetIdentityHeadersInNotificationsEnabledCommand.ts



var SetIdentityHeadersInNotificationsEnabledCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "SetIdentityHeadersInNotificationsEnabled", {}).n("SESClient", "SetIdentityHeadersInNotificationsEnabledCommand").f(void 0, void 0).ser(se_SetIdentityHeadersInNotificationsEnabledCommand).de(de_SetIdentityHeadersInNotificationsEnabledCommand).build() {
  static {
    __name(this, "SetIdentityHeadersInNotificationsEnabledCommand");
  }
};

// src/commands/SetIdentityMailFromDomainCommand.ts



var SetIdentityMailFromDomainCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "SetIdentityMailFromDomain", {}).n("SESClient", "SetIdentityMailFromDomainCommand").f(void 0, void 0).ser(se_SetIdentityMailFromDomainCommand).de(de_SetIdentityMailFromDomainCommand).build() {
  static {
    __name(this, "SetIdentityMailFromDomainCommand");
  }
};

// src/commands/SetIdentityNotificationTopicCommand.ts



var SetIdentityNotificationTopicCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "SetIdentityNotificationTopic", {}).n("SESClient", "SetIdentityNotificationTopicCommand").f(void 0, void 0).ser(se_SetIdentityNotificationTopicCommand).de(de_SetIdentityNotificationTopicCommand).build() {
  static {
    __name(this, "SetIdentityNotificationTopicCommand");
  }
};

// src/commands/SetReceiptRulePositionCommand.ts



var SetReceiptRulePositionCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "SetReceiptRulePosition", {}).n("SESClient", "SetReceiptRulePositionCommand").f(void 0, void 0).ser(se_SetReceiptRulePositionCommand).de(de_SetReceiptRulePositionCommand).build() {
  static {
    __name(this, "SetReceiptRulePositionCommand");
  }
};

// src/commands/TestRenderTemplateCommand.ts



var TestRenderTemplateCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "TestRenderTemplate", {}).n("SESClient", "TestRenderTemplateCommand").f(void 0, void 0).ser(se_TestRenderTemplateCommand).de(de_TestRenderTemplateCommand).build() {
  static {
    __name(this, "TestRenderTemplateCommand");
  }
};

// src/commands/UpdateAccountSendingEnabledCommand.ts



var UpdateAccountSendingEnabledCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "UpdateAccountSendingEnabled", {}).n("SESClient", "UpdateAccountSendingEnabledCommand").f(void 0, void 0).ser(se_UpdateAccountSendingEnabledCommand).de(de_UpdateAccountSendingEnabledCommand).build() {
  static {
    __name(this, "UpdateAccountSendingEnabledCommand");
  }
};

// src/commands/UpdateConfigurationSetEventDestinationCommand.ts



var UpdateConfigurationSetEventDestinationCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "UpdateConfigurationSetEventDestination", {}).n("SESClient", "UpdateConfigurationSetEventDestinationCommand").f(void 0, void 0).ser(se_UpdateConfigurationSetEventDestinationCommand).de(de_UpdateConfigurationSetEventDestinationCommand).build() {
  static {
    __name(this, "UpdateConfigurationSetEventDestinationCommand");
  }
};

// src/commands/UpdateConfigurationSetReputationMetricsEnabledCommand.ts



var UpdateConfigurationSetReputationMetricsEnabledCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "UpdateConfigurationSetReputationMetricsEnabled", {}).n("SESClient", "UpdateConfigurationSetReputationMetricsEnabledCommand").f(void 0, void 0).ser(se_UpdateConfigurationSetReputationMetricsEnabledCommand).de(de_UpdateConfigurationSetReputationMetricsEnabledCommand).build() {
  static {
    __name(this, "UpdateConfigurationSetReputationMetricsEnabledCommand");
  }
};

// src/commands/UpdateConfigurationSetSendingEnabledCommand.ts



var UpdateConfigurationSetSendingEnabledCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "UpdateConfigurationSetSendingEnabled", {}).n("SESClient", "UpdateConfigurationSetSendingEnabledCommand").f(void 0, void 0).ser(se_UpdateConfigurationSetSendingEnabledCommand).de(de_UpdateConfigurationSetSendingEnabledCommand).build() {
  static {
    __name(this, "UpdateConfigurationSetSendingEnabledCommand");
  }
};

// src/commands/UpdateConfigurationSetTrackingOptionsCommand.ts



var UpdateConfigurationSetTrackingOptionsCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "UpdateConfigurationSetTrackingOptions", {}).n("SESClient", "UpdateConfigurationSetTrackingOptionsCommand").f(void 0, void 0).ser(se_UpdateConfigurationSetTrackingOptionsCommand).de(de_UpdateConfigurationSetTrackingOptionsCommand).build() {
  static {
    __name(this, "UpdateConfigurationSetTrackingOptionsCommand");
  }
};

// src/commands/UpdateCustomVerificationEmailTemplateCommand.ts



var UpdateCustomVerificationEmailTemplateCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "UpdateCustomVerificationEmailTemplate", {}).n("SESClient", "UpdateCustomVerificationEmailTemplateCommand").f(void 0, void 0).ser(se_UpdateCustomVerificationEmailTemplateCommand).de(de_UpdateCustomVerificationEmailTemplateCommand).build() {
  static {
    __name(this, "UpdateCustomVerificationEmailTemplateCommand");
  }
};

// src/commands/UpdateReceiptRuleCommand.ts



var UpdateReceiptRuleCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "UpdateReceiptRule", {}).n("SESClient", "UpdateReceiptRuleCommand").f(void 0, void 0).ser(se_UpdateReceiptRuleCommand).de(de_UpdateReceiptRuleCommand).build() {
  static {
    __name(this, "UpdateReceiptRuleCommand");
  }
};

// src/commands/UpdateTemplateCommand.ts



var UpdateTemplateCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "UpdateTemplate", {}).n("SESClient", "UpdateTemplateCommand").f(void 0, void 0).ser(se_UpdateTemplateCommand).de(de_UpdateTemplateCommand).build() {
  static {
    __name(this, "UpdateTemplateCommand");
  }
};

// src/commands/VerifyDomainDkimCommand.ts



var VerifyDomainDkimCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "VerifyDomainDkim", {}).n("SESClient", "VerifyDomainDkimCommand").f(void 0, void 0).ser(se_VerifyDomainDkimCommand).de(de_VerifyDomainDkimCommand).build() {
  static {
    __name(this, "VerifyDomainDkimCommand");
  }
};

// src/commands/VerifyDomainIdentityCommand.ts



var VerifyDomainIdentityCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "VerifyDomainIdentity", {}).n("SESClient", "VerifyDomainIdentityCommand").f(void 0, void 0).ser(se_VerifyDomainIdentityCommand).de(de_VerifyDomainIdentityCommand).build() {
  static {
    __name(this, "VerifyDomainIdentityCommand");
  }
};

// src/commands/VerifyEmailAddressCommand.ts



var VerifyEmailAddressCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "VerifyEmailAddress", {}).n("SESClient", "VerifyEmailAddressCommand").f(void 0, void 0).ser(se_VerifyEmailAddressCommand).de(de_VerifyEmailAddressCommand).build() {
  static {
    __name(this, "VerifyEmailAddressCommand");
  }
};

// src/commands/VerifyEmailIdentityCommand.ts



var VerifyEmailIdentityCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SimpleEmailService", "VerifyEmailIdentity", {}).n("SESClient", "VerifyEmailIdentityCommand").f(void 0, void 0).ser(se_VerifyEmailIdentityCommand).de(de_VerifyEmailIdentityCommand).build() {
  static {
    __name(this, "VerifyEmailIdentityCommand");
  }
};

// src/SES.ts
var commands = {
  CloneReceiptRuleSetCommand,
  CreateConfigurationSetCommand,
  CreateConfigurationSetEventDestinationCommand,
  CreateConfigurationSetTrackingOptionsCommand,
  CreateCustomVerificationEmailTemplateCommand,
  CreateReceiptFilterCommand,
  CreateReceiptRuleCommand,
  CreateReceiptRuleSetCommand,
  CreateTemplateCommand,
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetEventDestinationCommand,
  DeleteConfigurationSetTrackingOptionsCommand,
  DeleteCustomVerificationEmailTemplateCommand,
  DeleteIdentityCommand,
  DeleteIdentityPolicyCommand,
  DeleteReceiptFilterCommand,
  DeleteReceiptRuleCommand,
  DeleteReceiptRuleSetCommand,
  DeleteTemplateCommand,
  DeleteVerifiedEmailAddressCommand,
  DescribeActiveReceiptRuleSetCommand,
  DescribeConfigurationSetCommand,
  DescribeReceiptRuleCommand,
  DescribeReceiptRuleSetCommand,
  GetAccountSendingEnabledCommand,
  GetCustomVerificationEmailTemplateCommand,
  GetIdentityDkimAttributesCommand,
  GetIdentityMailFromDomainAttributesCommand,
  GetIdentityNotificationAttributesCommand,
  GetIdentityPoliciesCommand,
  GetIdentityVerificationAttributesCommand,
  GetSendQuotaCommand,
  GetSendStatisticsCommand,
  GetTemplateCommand,
  ListConfigurationSetsCommand,
  ListCustomVerificationEmailTemplatesCommand,
  ListIdentitiesCommand,
  ListIdentityPoliciesCommand,
  ListReceiptFiltersCommand,
  ListReceiptRuleSetsCommand,
  ListTemplatesCommand,
  ListVerifiedEmailAddressesCommand,
  PutConfigurationSetDeliveryOptionsCommand,
  PutIdentityPolicyCommand,
  ReorderReceiptRuleSetCommand,
  SendBounceCommand,
  SendBulkTemplatedEmailCommand,
  SendCustomVerificationEmailCommand,
  SendEmailCommand,
  SendRawEmailCommand,
  SendTemplatedEmailCommand,
  SetActiveReceiptRuleSetCommand,
  SetIdentityDkimEnabledCommand,
  SetIdentityFeedbackForwardingEnabledCommand,
  SetIdentityHeadersInNotificationsEnabledCommand,
  SetIdentityMailFromDomainCommand,
  SetIdentityNotificationTopicCommand,
  SetReceiptRulePositionCommand,
  TestRenderTemplateCommand,
  UpdateAccountSendingEnabledCommand,
  UpdateConfigurationSetEventDestinationCommand,
  UpdateConfigurationSetReputationMetricsEnabledCommand,
  UpdateConfigurationSetSendingEnabledCommand,
  UpdateConfigurationSetTrackingOptionsCommand,
  UpdateCustomVerificationEmailTemplateCommand,
  UpdateReceiptRuleCommand,
  UpdateTemplateCommand,
  VerifyDomainDkimCommand,
  VerifyDomainIdentityCommand,
  VerifyEmailAddressCommand,
  VerifyEmailIdentityCommand
};
var SES = class extends SESClient {
  static {
    __name(this, "SES");
  }
};
(0, import_smithy_client.createAggregatedClient)(commands, SES);

// src/pagination/ListCustomVerificationEmailTemplatesPaginator.ts

var paginateListCustomVerificationEmailTemplates = (0, import_core.createPaginator)(SESClient, ListCustomVerificationEmailTemplatesCommand, "NextToken", "NextToken", "MaxResults");

// src/pagination/ListIdentitiesPaginator.ts

var paginateListIdentities = (0, import_core.createPaginator)(SESClient, ListIdentitiesCommand, "NextToken", "NextToken", "MaxItems");

// src/waiters/waitForIdentityExists.ts
var import_util_waiter = require("@smithy/util-waiter");
var checkState = /* @__PURE__ */ __name(async (client, input) => {
  let reason;
  try {
    const result = await client.send(new GetIdentityVerificationAttributesCommand(input));
    reason = result;
    try {
      const returnComparator = /* @__PURE__ */ __name(() => {
        const objectProjection_2 = Object.values(result.VerificationAttributes).map((element_1) => {
          return element_1.VerificationStatus;
        });
        return objectProjection_2;
      }, "returnComparator");
      let allStringEq_4 = returnComparator().length > 0;
      for (const element_3 of returnComparator()) {
        allStringEq_4 = allStringEq_4 && element_3 == "Success";
      }
      if (allStringEq_4) {
        return { state: import_util_waiter.WaiterState.SUCCESS, reason };
      }
    } catch (e) {
    }
  } catch (exception) {
    reason = exception;
  }
  return { state: import_util_waiter.WaiterState.RETRY, reason };
}, "checkState");
var waitForIdentityExists = /* @__PURE__ */ __name(async (params, input) => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return (0, import_util_waiter.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
}, "waitForIdentityExists");
var waitUntilIdentityExists = /* @__PURE__ */ __name(async (params, input) => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await (0, import_util_waiter.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
  return (0, import_util_waiter.checkExceptions)(result);
}, "waitUntilIdentityExists");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  SESServiceException,
  __Client,
  SESClient,
  SES,
  $Command,
  CloneReceiptRuleSetCommand,
  CreateConfigurationSetCommand,
  CreateConfigurationSetEventDestinationCommand,
  CreateConfigurationSetTrackingOptionsCommand,
  CreateCustomVerificationEmailTemplateCommand,
  CreateReceiptFilterCommand,
  CreateReceiptRuleCommand,
  CreateReceiptRuleSetCommand,
  CreateTemplateCommand,
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetEventDestinationCommand,
  DeleteConfigurationSetTrackingOptionsCommand,
  DeleteCustomVerificationEmailTemplateCommand,
  DeleteIdentityCommand,
  DeleteIdentityPolicyCommand,
  DeleteReceiptFilterCommand,
  DeleteReceiptRuleCommand,
  DeleteReceiptRuleSetCommand,
  DeleteTemplateCommand,
  DeleteVerifiedEmailAddressCommand,
  DescribeActiveReceiptRuleSetCommand,
  DescribeConfigurationSetCommand,
  DescribeReceiptRuleCommand,
  DescribeReceiptRuleSetCommand,
  GetAccountSendingEnabledCommand,
  GetCustomVerificationEmailTemplateCommand,
  GetIdentityDkimAttributesCommand,
  GetIdentityMailFromDomainAttributesCommand,
  GetIdentityNotificationAttributesCommand,
  GetIdentityPoliciesCommand,
  GetIdentityVerificationAttributesCommand,
  GetSendQuotaCommand,
  GetSendStatisticsCommand,
  GetTemplateCommand,
  ListConfigurationSetsCommand,
  ListCustomVerificationEmailTemplatesCommand,
  ListIdentitiesCommand,
  ListIdentityPoliciesCommand,
  ListReceiptFiltersCommand,
  ListReceiptRuleSetsCommand,
  ListTemplatesCommand,
  ListVerifiedEmailAddressesCommand,
  PutConfigurationSetDeliveryOptionsCommand,
  PutIdentityPolicyCommand,
  ReorderReceiptRuleSetCommand,
  SendBounceCommand,
  SendBulkTemplatedEmailCommand,
  SendCustomVerificationEmailCommand,
  SendEmailCommand,
  SendRawEmailCommand,
  SendTemplatedEmailCommand,
  SetActiveReceiptRuleSetCommand,
  SetIdentityDkimEnabledCommand,
  SetIdentityFeedbackForwardingEnabledCommand,
  SetIdentityHeadersInNotificationsEnabledCommand,
  SetIdentityMailFromDomainCommand,
  SetIdentityNotificationTopicCommand,
  SetReceiptRulePositionCommand,
  TestRenderTemplateCommand,
  UpdateAccountSendingEnabledCommand,
  UpdateConfigurationSetEventDestinationCommand,
  UpdateConfigurationSetReputationMetricsEnabledCommand,
  UpdateConfigurationSetSendingEnabledCommand,
  UpdateConfigurationSetTrackingOptionsCommand,
  UpdateCustomVerificationEmailTemplateCommand,
  UpdateReceiptRuleCommand,
  UpdateTemplateCommand,
  VerifyDomainDkimCommand,
  VerifyDomainIdentityCommand,
  VerifyEmailAddressCommand,
  VerifyEmailIdentityCommand,
  paginateListCustomVerificationEmailTemplates,
  paginateListIdentities,
  waitForIdentityExists,
  waitUntilIdentityExists,
  AccountSendingPausedException,
  AlreadyExistsException,
  BehaviorOnMXFailure,
  BounceType,
  DsnAction,
  BulkEmailStatus,
  CannotDeleteException,
  LimitExceededException,
  RuleSetDoesNotExistException,
  DimensionValueSource,
  ConfigurationSetAlreadyExistsException,
  ConfigurationSetAttribute,
  ConfigurationSetDoesNotExistException,
  ConfigurationSetSendingPausedException,
  InvalidConfigurationSetException,
  EventType,
  EventDestinationAlreadyExistsException,
  InvalidCloudWatchDestinationException,
  InvalidFirehoseDestinationException,
  InvalidSNSDestinationException,
  InvalidTrackingOptionsException,
  TrackingOptionsAlreadyExistsException,
  CustomVerificationEmailInvalidContentException,
  CustomVerificationEmailTemplateAlreadyExistsException,
  FromEmailAddressNotVerifiedException,
  ReceiptFilterPolicy,
  InvocationType,
  SNSActionEncoding,
  StopScope,
  TlsPolicy,
  InvalidLambdaFunctionException,
  InvalidS3ConfigurationException,
  InvalidSnsTopicException,
  RuleDoesNotExistException,
  InvalidTemplateException,
  CustomMailFromStatus,
  CustomVerificationEmailTemplateDoesNotExistException,
  EventDestinationDoesNotExistException,
  TrackingOptionsDoesNotExistException,
  VerificationStatus,
  TemplateDoesNotExistException,
  IdentityType,
  InvalidDeliveryOptionsException,
  InvalidPolicyException,
  InvalidRenderingParameterException,
  MailFromDomainNotVerifiedException,
  MessageRejected,
  MissingRenderingAttributeException,
  NotificationType,
  ProductionAccessNotGrantedException
});

