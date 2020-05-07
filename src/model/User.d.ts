/**
 * 用户
 */
interface User {
    /** UUID */
    UUID: string;
    /** 名称 */
    Name: string;
    /** 性别 */
    Sex: EnumSex;
    /** 年龄 */
    Age?: number;
    Birthday: datetime;
    /**
     * 关联的多张信用卡
     */
    CreditCards: CreditCard[];
};