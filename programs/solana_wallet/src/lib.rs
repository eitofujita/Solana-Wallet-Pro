use anchor_lang::prelude::*;

declare_id!("BAcey82mcE8dZDbRuXFL7KKKnSyFSLb13DUSPQfp86gS");
// program id 

#[program]
pub mod solana_wallet {
    use super::*;

    pub fn hello_world(ctx: Context<HelloWorld>) -> Result<()> {
        msg!("Hello, Solana!");  // Solana のログにメッセージを出力
        Ok(())
    }
}

#[derive(Accounts)]
pub struct HelloWorld<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
}
