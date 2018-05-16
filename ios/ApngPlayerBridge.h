#import <React/RCTView.h>

@interface ApngPlayerBridge : RCTView

@property (nonatomic, assign) NSString *source;
@property (nonatomic, copy) RCTDirectEventBlock onFinish;

@end
