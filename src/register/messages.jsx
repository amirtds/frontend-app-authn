import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'register.page.title': {
    id: 'register.page.title',
    defaultMessage: "ثبت نام | {siteName}",
    description: 'register page title',
  },
  // Field labels
  'registration.fullname.label': {
    id: 'registration.fullname.label',
    defaultMessage: "نام و نام خانوادگی - فقط با حروف لاتین",
    description: 'Label that appears above fullname field',
  },
  'registration.email.label': {
    id: 'registration.email.label',
    defaultMessage: 'ایمیل',
    description: 'Label that appears above email field on register page',
  },
  'registration.username.label': {
    id: 'registration.username.label',
    defaultMessage: "نام کاربری عمومی",
    description: 'Label that appears above username field',
  },
  'registration.password.label': {
    id: 'registration.password.label',
    defaultMessage: "رمز عبور",
    description: 'Label that appears above password field',
  },
  'registration.country.label': {
    id: 'registration.country.label',
    defaultMessage: "کشور / منطقه",
    description: 'Placeholder for the country options dropdown.',
  },
  'registration.opt.in.label': {
    id: 'registration.opt.in.label',
    defaultMessage: "موافقم که {siteName} می‌تواند پیام‌های بازاریابی برایم ارسال کند.",
    description: 'Text for opt in option on register page.',
  },
  // Help text
  'help.text.name': {
    id: 'help.text.name',
    defaultMessage: 'این نام برای هر گواهی‌نامه‌ای که کسب می‌کنید استفاده خواهد شد.',
    description: 'Help text for fullname field on registration page',
  },
  'help.text.username.1': {
    id: 'help.text.username.1',
    defaultMessage: 'نام کاربری شما برای دیگران قابل مشاهده است.',
    description: 'Part of help text for username field on registration page',
  },
  'help.text.username.2': {
    id: 'help.text.username.2',
    defaultMessage: 'این قابل تغییر در آینده نیست.',
    description: 'Part of help text for username field on registration page',
  },
  'help.text.email': {
    id: 'help.text.email',
    defaultMessage: 'برای فعال سازی حساب و بروزرسانی های مهم',
    description: 'Help text for email field on registration page',
  },
  // Form buttons
  'create.account.for.free.button': {
    id: 'create.account.for.free.button',
    defaultMessage: "ایجاد حساب کاربری رایگان",
    description: 'Label text for registration form submission button',
  },
  'create.an.account.btn.pending.state': {
    id: 'create.an.account.btn.pending.state',
    defaultMessage: 'در حال بارگذاری',
    description: 'Title of icon that appears when button is in pending state',
  },
  'registration.other.options.heading': {
    id: 'registration.other.options.heading',
    defaultMessage: 'یا ثبت نام با:',
    description: 'A message that appears above third party auth providers i.e saml, google, facebook etc',
  },
  // Institution login
  'register.institution.login.button': {
    id: 'register.institution.login.button',
    defaultMessage: "اعتبارهای مؤسسه / دانشگاه",
    description: 'shows institutions list',
  },
  'register.institution.login.page.title': {
    id: 'register.institution.login.page.title',
    defaultMessage: "ثبت نام با اعتبارهای مؤسسه / دانشگاه",
    description: 'Heading of institution page',
  },
  'create.an.account': {
    id: 'create.an.account',
    defaultMessage: 'ایجاد یک حساب کاربری',
    description: 'Message on button to return to register page',
    },
    'empty.name.field.error': {
    id: 'empty.name.field.error',
    defaultMessage: 'نام کامل خود را وارد کنید',
    description: 'Error message for empty fullname field',
    },
    'empty.email.field.error': {
    id: 'empty.email.field.error',
    defaultMessage: 'ایمیل خود را وارد کنید',
    description: 'Error message for empty email field',
    },
    'email.do.not.match': {
    id: 'email.do.not.match',
    defaultMessage: 'آدرس‌های ایمیل مطابقت ندارند.',
    description: 'Email not match to confirm email',
    },
    'empty.username.field.error': {
    id: 'empty.username.field.error',
    defaultMessage: 'نام کاربری باید بین 2 تا 30 کاراکتر باشد',
    description: 'Error message for empty username field',
    },
    'empty.password.field.error': {
    id: 'empty.password.field.error',
    defaultMessage: 'شرایط رمز عبور برآورده نشده است',
    description: 'Error message for empty password field',
    },
    'empty.country.field.error': {
    id: 'empty.country.field.error',
    defaultMessage: 'کشور یا منطقه محل اقامت خود را انتخاب کنید',
    description: 'Error message when no country/region is selected',
    },
    'email.invalid.format.error': {
    id: 'email.invalid.format.error',
    defaultMessage: 'آدرس ایمیل معتبری وارد کنید',
    description: 'Validation error for invalid email address',
    },
    'email.ratelimit.less.chars.validation.message': {
    id: 'email.ratelimit.less.chars.validation.message',
    defaultMessage: 'ایمیل باید حداقل 3 کاراکتر داشته باشد.',
    description: 'Validation message that appears when email address is less than 3 characters',
    },
    'username.validation.message': {
    id: 'username.validation.message',
    defaultMessage: 'نام کاربری باید بین 2 تا 30 کاراکتر باشد',
    description: 'Error message for empty username field',
    },
    'name.validation.message': {
    id: 'name.validation.message',
    defaultMessage: 'نام معتبری وارد کنید',
    description: 'Validation message that appears when fullname contain URL',
    },
    'password.validation.message': {
    id: 'password.validation.message',
    defaultMessage: 'شرایط رمز عبور برآورده نشده است',
    description: 'Error message for empty or invalid password',
    },
    'username.format.validation.message': {
    id: 'username.format.validation.message',
    defaultMessage: 'نام کاربری فقط می‌تواند شامل حروف (A-Z, a-z)، اعداد (0-9)، خط زیر (_) و خط فاصله (-) باشد. نام کاربری نمی‌تواند شامل فاصله باشد',
    description: 'Validation message that appears when username format is invalid',
    },
    'support.education.research': {
    id: 'support.education.research',
    defaultMessage: 'با ارائه اطلاعات اضافی، به تحقیقات آموزشی کمک کنید. (اختیاری)',
    description: 'Text for a checkbox to ask user for if they are willing to provide extra information for education research',
    },
    'registration.request.failure.header': {
    id: 'registration.request.failure.header',
    defaultMessage: 'ما نتوانستیم حساب کاربری شما را ایجاد کنیم.',
    description: 'error message when registration failure.',
    },
    'registration.empty.form.submission.error': {
    id: 'registration.empty.form.submission.error',
    defaultMessage: 'لطفا پاسخ‌های خود را بررسی کنید و دوباره امتحان کنید.',
    description: 'Error message that appears on top of the form when empty form is submitted',
    },
    'registration.request.server.error': {
    id: 'registration.request.server.error',
    defaultMessage: 'خطایی رخ داده است. سعی کنید صفحه را تازه کنید، یا اتصال اینترنت خود را بررسی کنید.',
    description: 'Error message for internal server error.',
    },
    'registration.rate.limit.error': {
    id: 'registration.rate.limit.error',
    defaultMessage: 'تعداد زیادی تلاش ناموفق برای ثبت نام. بعدا دوباره امتحان کنید.',
    description: 'Error message that appears when an anonymous user has made too many failed registration attempts',
    },
    'registration.tpa.session.expired': {
    id: 'registration.tpa.session.expired',
    defaultMessage: 'ثبت نام با استفاده از {provider} منقضی شده است.',
    description: '',
    },
    'terms.of.service.and.honor.code': {
    id: 'terms.of.service.and.honor.code',
    defaultMessage: 'شرایط خدمات و کد افتخار',
    description: 'Text for the hyperlink that redirects user to terms of service and honor code',
    },
    'privacy.policy': {
    id: 'privacy.policy',
    defaultMessage: 'سیاست حفظ حریم خصوصی',
    description: 'Text for the hyperlink that redirects user to privacy policy',
    },
    'honor.code': {
    id: 'honor.code',
    defaultMessage: 'کد افتخار',
    description: 'Text for the hyperlink that redirects user to the honor code',
    },
    'terms.of.service': {
    id: 'terms.of.service',
    defaultMessage: 'شرایط خدمات',
    description: 'Text for the hyperlink that redirects user to the terms of service',
    },
    'registration.year.of.birth.label': {
    id: 'registration.year.of.birth.label',
    defaultMessage: 'سال تولد (اختیاری)',
    description: 'Placeholder for the year of birth options dropdown',
    },
    'registration.field.gender.options.label': {
    id: 'registration.field.gender.options.label',
    defaultMessage: 'جنسیت (اختیاری)',
    description: 'Placeholder for the gender options dropdown',
    },
    'registration.goals.label': {
    id: 'registration.goals.label',
    defaultMessage: 'به ما بگویید که چرا در edX علاقمند هستید (اختیاری)',
    description: 'Placeholder for the goals options dropdown',
    },
    'registration.field.gender.options.f': {
    id: 'registration.field.gender.options.f',
    defaultMessage: 'زن',
    description: 'The label for the female gender option.',
    },
    'registration.field.gender.options.m': {
    id: 'registration.field.gender.options.m',
    defaultMessage: 'مرد',
    description: 'The label for the male gender option.',
    },
    'registration.field.gender.options.o': {
    id: 'registration.field.gender.options.o',
    defaultMessage: 'دیگر/ترجیح می‌دهم نگویم',
    description: 'The label for catch-all gender option.',
    },
    'registration.field.education.levels.label': {
    id: 'registration.field.education.levels.label',
    defaultMessage: 'بالاترین سطح تحصیلی کامل شده (اختیاری)',
    description: 'Placeholder for the education levels dropdown.',
    },
    'registration.field.education.levels.p': {
    id: 'registration.field.education.levels.p',
    defaultMessage: 'دکترا',
    description: 'Selected by the user if their highest level of education is a doctorate degree.',
    },
    'registration.field.education.levels.m': {
    id: 'registration.field.education.levels.m',
    defaultMessage: 'کارشناسی ارشد',
    description: "Selected by the user if their highest level of education is a master's from a college or university.",
    },
    'registration.field.education.levels.b': {
    id: 'registration.field.education.levels.b',
    defaultMessage: 'کارشناسی',
    description: "Selected by the user if their highest level of education is a four year college or university bachelor's degree.",
    },
    'registration.field.education.levels.a': {
    id: 'registration.field.education.levels.a',
    defaultMessage: 'کاردانی',
    description: "Selected by the user if their highest level of education is an associate's degree. 1-2 years of college or university.",
    },
    'registration.field.education.levels.hs': {
    id: 'registration.field.education.levels.hs',
    defaultMessage: 'دبیرستان',
    description: 'Selected by the user if their highest level of education is secondary or high school. 9-12 years of education.',
    },
    'registration.field.education.levels.jhs': {
    id: 'registration.field.education.levels.jhs',
    defaultMessage: 'راهنمایی',
    description: 'Selected by the user if their highest level of education is junior or middle school. 6-8 years of education.',
    },
    'registration.field.education.levels.el': {
    id: 'registration.field.education.levels.el',
    defaultMessage: 'ابتدایی',
    description: 'Selected by the user if their highest level of education is elementary or primary school. 1-5 years of education.',
    },
    'registration.field.education.levels.none': {
    id: 'registration.field.education.levels.none',
    defaultMessage: 'بدون تحصیلات',
    description: 'Selected by the user if they have received no formal education.',
    },
    'registration.field.education.levels.other': {
    id: 'registration.field.education.levels.other',
    defaultMessage: 'دیگر',
    description: 'Selected by the user if they received education that does not fit into the other categories.',
    },
    'registration.account.preferences.header': {
    id: 'registration.account.preferences.header',
    defaultMessage: 'تنظیمات حساب',
    description: 'Header for the account preferences section of the registration page.',
    },
    'registration.submit.button': {
    id: 'registration.submit.button',
    defaultMessage: 'ایجاد حساب',
    description: 'Text for the button to submit the registration form',
    },
    'registration.already.have.account.sign.in': {
    id: 'registration.already.have.account.sign.in',
    defaultMessage: 'هم اکنون یک حساب کاربری دارید؟ وارد شوید.',
    description: 'Text for the hyperlink that redirects user to the sign in page.',
    },
    'registration.use.social.account.info': {
    id: 'registration.use.social.account.info',
    defaultMessage: 'با یکی از حساب‌های اجتماعی زیر وارد شوید.',
    description: 'Info text that appears above the social media login options.',
    },
    'registration.field.why.edx.interested.label': {
    id: 'registration.field.why.edx.interested.label',
    defaultMessage: 'به ما بگویید که چرا در edX علاقمند هستید؟ (اختیاری)',
    description: 'Label for the "Why are you interested in edX?" dropdown.',
    },
    'registration.checkbox.agree.termsandconditions': {
    id: 'registration.checkbox.agree.termsandconditions',
    defaultMessage: 'من با شرایط خدمات و کد افتخار {sitename} موافقم',
    description: 'Text for the checkbox that users must check to agree to the terms of service and honor code.',
    },
    'registration.age.restriction.message': {
    id: 'registration.age.restriction.message',
    defaultMessage: 'شما باید حداقل 13 ساله باشید تا بتوانید حسابی در {sitename} بسازید',
    description: 'Error message for users under 13 years old.',
    },
    'registration.create.an.edx.account': {
    id: 'registration.create.an.edx.account',
    defaultMessage: 'ایجاد یک حساب در edX',
    description: 'Registration page title.',
    },
    'registration.field.required': {
    id: 'registration.field.required',
    defaultMessage: 'نشانه‌گذاری شده با * اجباری است',
    description: 'Text indicating that fields marked with * are required.',
    },
    'registration.sign.up.with.apple': {
    id: 'registration.sign.up.with.apple',
    defaultMessage: 'ثبت نام با اپل',
    description: 'Text for the button that users click to register using their Apple ID.',
    },
    'registration.sign.up.with.google': {
    id: 'registration.sign.up.with.google',
    defaultMessage: 'ثبت نام با گوگل',
    description: 'Text for the button that users click to register using their Google account.',
    },
    'registration.sign.up.with.facebook': {
    id: 'registration.sign.up.with.facebook',
    defaultMessage: 'ثبت نام با فیس‌بوک',
    description: 'Text for the button that users click to register using their Facebook account.',
    },
    'registration.email.confirmation.message': {
    id: 'registration.email.confirmation.message',
    defaultMessage: 'برای تکمیل فرآیند ثبت نام، لطفا ایمیل خود را تایید کنید.',
    description: 'Message that appears after a new user has submitted the registration form.',
    },
    'registration.need.help.signing.up': {
    id: 'registration.need.help.signing.up',
    defaultMessage: 'کمک می‌خواهید تا ثبت نام کنید؟',
    description: 'Text for the hyperlink that redirects user to the help page.',
    },
    'registration.field.confirm.email.label': {
    id: 'registration.field.confirm.email.label',
    defaultMessage: 'تایید آدرس ایمیل',
    description: 'Label for the email confirmation input.',
    },
    'registration.field.confirm.password.label': {
    id: 'registration.field.confirm.password.label',
    defaultMessage: 'تایید رمز عبور',
    description: 'Label for the password confirmation input.',
    },
    'registration.social.media.sign.up.option': {
    id: 'registration.social.media.sign.up.option',
    defaultMessage: 'یا با استفاده از',
    description: 'Text introducing the option to sign up using social media.',
    },
    'registration.captcha.failed.error': {
    id: 'registration.captcha.failed.error',
    defaultMessage: 'کپچا معتبر نیست.',
    description: 'Error message displayed when the reCAPTCHA validation fails during registration.',
    },
});

export default messages;
