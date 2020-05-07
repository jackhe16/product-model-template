import User from './User';

/**
 * 信用卡
 */
interface CreditCard {
    /** UUID */
    UUID: string;
    /** 卡号 */
    No: string;
    /** 所属用户 */
    User: User;
};

export default CreditCard;