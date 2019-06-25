/**
 * Utils for security operations.
 */
export class SecurityUtil {
  /**
   * Gets the permission for operation: Read.
   *
   * @param {string} context
   * @returns {string[]}
   */
  static getPermissionRead(context: string): string[] {
    return SecurityUtil.makePermission('read', context);
  }

  /**
   * Gets the permission for operation: Insert.
   *
   * @param {string} context
   * @returns {string[]}
   */
  static getPermissionInsert(context: string): string[] {
    return SecurityUtil.makePermission('insert', context);
  }

  /**
   * Gets the permission for operation: Update.
   *
   * @param {string} context
   * @returns {string[]}
   */
  static getPermissionUpdate(context: string): string[] {
    return SecurityUtil.makePermission('update', context);
  }

  /**
   * Gets the permission for operation: Delete.
   *
   * @param {string} context
   * @returns {string[]}
   */
  static getPermissionDelete(context: string): string[] {
    return SecurityUtil.makePermission('delete', context);
  }

  /**
   * Creates an array with all permissions needed in the context.
   *
   * @param {string} operation
   * @param {string} context
   * @returns {string[]}
   */
  private static makePermission(operation: string, context: string): string[] {
    return [`${operation}-*`, `${operation}-${context}`];
  }
}
